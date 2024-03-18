type
    arbol = ^nodo;
    nodo = record
        valor: integer;
        izquierdo, derecho: arbol;
    end;