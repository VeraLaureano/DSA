// Definimos un procedimiento llamado "crearNodo" que toma un puntero a un nodo de árbol (de tipo "arbol") y un valor entero como argumentos
procedure crearNodo (var nodo: arbol; valor: integer);
begin
    // Creamos un nuevo nodo de árbol y asignamos su dirección al puntero "nodo"
    new(nodo);
    // Asignamos el valor proporcionado al campo "valor" del nodo
    nodo^.valor := valor;
    // Inicializamos los punteros "izquierdo" y "derecho" del nodo como nulos
    nodo^.izquierdo := nil;
    nodo^.derecho := nil;
end;
