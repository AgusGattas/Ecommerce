
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import  status
from . models import Product
from . serializers import ProductSerializer
from backend.pagination import CustomPagination

@api_view(['GET'])
def get_products(request):
    products = Product.objects.all() #realiza una consulta a la base de datos para obtener todos los objetos de la clase Product. Esto asume que tienes un modelo llamado Product definido en tu aplicación Django.
    pagination = CustomPagination()
    paginated_products = pagination.paginate_queryset(products, request)
    serializer = ProductSerializer(paginated_products, many=True) # crea una instancia del serializador ProductSerializer y pasa los objetos de productos obtenidos de la base de datos (products). many=True indica que estamos tratando con varios objetos y no solo uno.
    return pagination.get_paginated_response(serializer.data) # La función serializer.data contiene los datos serializados en un formato que puede ser enviado como respuesta.

@api_view(['GET'])
def get_product(request, name): # esto es para obtener UN solo producto a traves del nombre
    products = Product.objects.get(name=name) 
    serializer = ProductSerializer(products, many=False) 
    return Response(serializer.data)

@api_view(['GET'])
def get_product_admin(request, id): # esto es para obtener UN solo producto a traves del ID
    products = Product.objects.get(id=id) 
    serializer = ProductSerializer(products, many=False) 
    return Response(serializer.data)

@api_view(['POST'])
def create_product(request): # esto es para crear un producto
    if request.user.is_staff: #esto s para que el usiario administrador sea el unico que puede crear productos
        serializer = ProductSerializer(data=request.data) 
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(serializer.data, status=status.HTTP_401_UNAUTHORIZED)
    
@api_view(['PUT'])
def edit_product(request, pk):
    product = Product.objects.get(pk=pk)
    if request.user.is_staff:
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(status=status.HTTP_401_UNAUTHORIZED)

@api_view(['DELETE'])
def delete_product(request, pk): 
    product = Product.objects.get(pk=pk)
    if request.user.is_staff:
        product.delete()
        return Response( status=status.HTTP_204_NO_CONTENT)
    else:
        return Response(status=status.HTTP_401_UNAUTHORIZED)
    

# esta funcion la creamos para poder buscar en el buscador de la pagina los productos por su nombre  
@api_view(['GET'])
def search(request):
    query = request.query_params.get('query')
    if query is None:
        query = ''
    prod = Product.objects.filter(name__icontains=query)#Utiliza Django ORM para realizar una consulta a la base de datos. Filtra los objetos de la clase Product cuyos nombres contienen (sin distinguir mayúsculas y minúsculas) el valor de query.
    serializer = ProductSerializer(prod, many=True)# Los serializadores en Django REST Framework convierten objetos complejos (como modelos de Django) en tipos de datos que pueden ser fácilmente convertidos a JSON.
    return Response({'products': serializer.data})