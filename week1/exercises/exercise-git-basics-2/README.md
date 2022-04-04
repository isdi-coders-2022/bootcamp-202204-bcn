## Ejercicio Git Basics 2

1. Inicializa un repositorio local
2. Añade al stage todos los archivos y crea un commit inicial con todos ellos.
3. Abre el archivo `lamp/lamp.ts` y añade esta nueva propiedad a la clase. Guarda el archivo.

```typescript
    private hasBubble: boolean;
```

4. Abre el archivo `washing-machine/washing-machine.ts` y haz que el método `wash()` sea privado. Guarda el archivo.
5. Añade los cambios al stage y haz un commit con ellos.
6. Abre el archivo `washing-machine/washing-machine.ts` y corrige la visibilidad del método `wash()`, hazlo público. Guarda el archivo.
7. Abre el archivo `lamp/lamp.ts` y añade este nuevo método. Guarda el archivo.

```typescript
    public switch(): void {
        this.isOn = !this.isOn;
    }
```

8. Anota el hash del último commit que has hecho.
9. Añade únicamente la corrección del punto 6 al último commit que has hecho (sin crear un commit nuevo). ¿Su hash ha cambiado? ¿Por qué?
10. Crea un nuevo commit con el cambio del punto 7.
11. Comprueba que te ha quedado un log con tres commits.
12. Comprueba que en el penúltimo commit has corregido bien la visibilidad del método `wash()`.
