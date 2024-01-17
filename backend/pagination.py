from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

class CustomPagination(PageNumberPagination):
    page_size = 9 #Define el número de elementos por página. En este caso, se ha establecido en 9.
    page_size_query_param = 'page_size' # Permite a los clientes especificar el tamaño de la página utilizando el parámetro page_size en la URL.
    max_page_size = 9 # Establece un límite máximo para el tamaño de la página.
    page_query_param = 'page' # Especifica el nombre del parámetro que se utiliza para indicar el número de la página actual.

    def get_paginated_response(self, data): #Este método se sobrecarga para personalizar la estructura de la respuesta paginada.
        return Response({
            'data': data, #Es la lista de objetos que se están paginando.
            'meta': {
                'next': self.page.next_page_number()# Next Devuelve el número de la página siguiente si existe.
                if self.page.has_next() else None,
                'previous': self.page.previous_page_number()#Devuelve el número de la página anterior si existe.
                if self.page.has_previous() else None,
                'count': self.page.paginator.count,#Devuelve la cantidad total de elementos paginados.
                }
        })