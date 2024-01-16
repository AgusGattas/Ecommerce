from django.db import models
from users.models import User

class Product(models.Model):
    
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True) #Esto significa que cada producto está asociado con un usuario, y el argumento on_delete=models.SET_NULL indica que si el usuario relacionado se elimina, el campo user en el producto se establecerá en NULL
    name = models.CharField(max_length=100, blank=True)
    image = models.ImageField(default='placeholder.png')
    category = models.CharField(max_length=100, blank=True)
    description = models.CharField(max_length=100, blank=True)
    rating = models.DecimalField(max_digits=10, decimal_places=2, null= True, blank= True)
    num_reviews = models.IntegerField(default=0)
    price = models.DecimalField(max_digits=10, decimal_places=2, null= True, blank= True)
    count_in_stock = models.IntegerField(default=0)
    created = models.DateTimeField (auto_now_add = True)

class Reviews(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null= True )
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True) 
    rating = models.DecimalField(max_digits=10, decimal_places=2, null= True, blank= True)
    description = models.CharField(max_length=100, blank=True)
    created = models.DateTimeField (auto_now_add = True)


