# ITS-2022_Fixture

Trabajo práctico --> Prácticas profesionalizantes 1

# Instruccion básicas para git

## Clonar repositorio
```bash
>/ git clone <url>
```
<br>

## Crear rama y cambiar a esa rama
```bash
>/ git branch <nombreRama>
>/ git checkout <nombreRama>
```
<br>

Podemos verificar que efectivamente estamos en la rama en la que queremos trabajar. La rama actual es la que aparece con un `*`.
```bash
>/ git branch

// resultado esperado
  main
* miRama
```


## Hacer el commit (local)
Después de hacer los cambios necesarios
```bash
> git commit -m '<comentarios del commit>'
```
<br>

Para tener más líneas en el comentario, se puede hacer
```bash
>/ git commit
```
Ahora se nos abre un editor de texto en consola. En la parte superior escribimos todos los comentarios que queremos hacerle al commit --> Apretamos escape --> y escribimos `:wq` --> Commit realizado

<br>

## Hacer push: Enviar al repositorio remoto.
```bash
>/ git push
```
<br>

Si es la primera vez que vamos a hacer push de esa rama, va a aparecer un mensaje indicandonos cual es el comando `git` que debemos ejecutar.
