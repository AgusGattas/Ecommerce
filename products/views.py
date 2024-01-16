
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import  status
from . models import Product
from . serializers import ProductSerializer

@api_view(['GET'])
def get_products(request):
    products = Product.objects.all() #realiza una consulta a la base de datos para obtener todos los objetos de la clase Product. Esto asume que tienes un modelo llamado Product definido en tu aplicación Django.
    serializer = ProductSerializer(products, many=True) # crea una instancia del serializador ProductSerializer y pasa los objetos de productos obtenidos de la base de datos (products). many=True indica que estamos tratando con varios objetos y no solo uno.
    return Response(serializer.data) # La función serializer.data contiene los datos serializados en un formato que puede ser enviado como respuesta.

@api_view(['GET'])
def get_product(request, name): # esto es para obtener UN solo producto a traves del nombre
    products = Product.objects.get(name=name) 
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
    
@api_view(['POST'])
def edit_product(request, pk): 
    product = Product.objects.get(pk=pk) #primary key
    if request.user.is_staff: 
        serializer = ProductSerializer(product, data=request.data) 
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(serializer.data, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['DELETE'])
def delete_product(request, pk): 
    product = Product.objects.get(pk=pk)
    if request.user.is_staff:
        product.delete()
        return Response( status=status.HTTP_204_NO_CONTENT)
    else:
        return Response(status=status.HTTP_401_UNAUTHORIZED)