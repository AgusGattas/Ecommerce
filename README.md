# Ecommerce Django - React


## Caracteristicas

* Base de datos: Sqlite3
* REACT
* Django Rest Framework

# Introduccion
Con la fusion entre Django y React he creado este Ecommerce. Gracias al ORM de Django con los modelos anteriormente creados podemos cargar nuestra base de datos.
Toda el proyecto esta crados con seguridad de tokens al momento de crear un usuario como al momento de los refreesh coreespondientes. Dentro de la pagina podemos crear productos
categorias, hacer login, registrarnos, enviar al carrito de compras los productos seleccionados, los productos van obteniendo una valoracion segun las compras, en el panel de 
administrador podemos realizar todas las funciones CRUD.
La velocidad, seguridad y facilidad de uso son las principales ventajas de este Ecommerce 

# Como correr

## Ejemplificacion con Window 

Crear entorno virtual (opcional)
``` bash
virtualenv myenv
myenv\Scripts\activate
```

instale todos los requirements:
```
pip install -r requirements.txt
```

Ejecute migraciones para configurar la base de datos:
``` bash
python manage.py migrate
```

Cree un superusuario para obtener acceso al panel de administración:
``` bash
python manage.py createsuperuser
```

## Correr el proyecto:
``` bash
python manage.py runserver 
```

## Correr Front
En una terminal desde el directorio Frontend inicializar:
``` bash
npm run dev
```

