# Ejercicio saldos medios

1. Tenemos un array de clientes de un banco. De cada cliente tenemos el DNI, el nombre y los apellidos, el saldo medio anual, el saldo máximo anual, si tiene la nómina domiciliada o no y sus teléfonos de contacto.

2. Crea una función que reciba un array de clientes y devuelva un array con todos los DNIs de los clientes que tengan teléfono fijo. Fuera de la función, imprime por consola los DNIs de este array mediante un bucle.

3. Crea una función que reciba un array de clientes y un salde medio mínimo. La función debe devolver otro array de clientes donde cada cliente tenga la siguiente forma, y donde sólo estén los clientes con nómina y con un saldo medio menor al recibido.

```javascript
{
    dni: 'XXXXXXXXX',
    nameSurnames: 'XXXXX XXXXXX XXXXXX',
    averageBalance: X
}
```

4. Crea una función que reciba un array de clientes (ponle como valor por defecto un array vacío) con la forma del punto anterior y que devuelva la media de todos los saldos medios obtenidos.

5. Utilizando dicha función, imprime por consola un mensaje como éste utilizando template literals:
   "El saldo medio promedio de los clientes con nómina y con saldo medio menor a X€ es: Y€".
