procedure crearRaiz (var raiz: arbol; valor: integer);
begin
    new(raiz);
    raiz^.dato := valor;
    raiz^.hi := nil;
    raiz^.hd := nil;
end;

procedure insertar (var nodo: arbol; valor: integer);
begin
    if (nodo = nil) then
        crearRaiz(nodo, valor)
    else if (valor < nodo^.dato) then
        insertar(nodo^.hi, valor)
    else if (valor > nodo^.dato) then
        insertar(nodo^.hd, valor)
    else
        writeln('El valor ya esta en el arbol')
end;

procedure preOrder(nodo: arbol);
begin
    if (nodo <> nil) then
    begin
        writeln(nodo^.dato);
        preOrder(nodo^.hi);
        preOrder(nodo^.hd)
    end
end;

procedure inOrder(nodo: arbol);
begin
    if (nodo <> nil) then
    begin
        inOrder(nodo^.hi);
        writeln(nodo^.dato);
        inOrder(nodo^.hd)
    end
end;
 
procedure postOrder(nodo: arbol);
begin
    if (nodo <> nil) then
    begin
        postOrder(nodo^.hi);
        postOrder(nodo^.hd);
        writeln(nodo^.dato)
    end
end;

function buscar(nodo: arbol; valor: integer): arbol;
begin
    if (nodo = nil or nodo^.data = valor) then
        buscar := nodo
    else if (valor < nodo^.dato) then
        buscar := buscar(nodo^.hi, valor)
    else
        buscar := buscar(nodo^.hd, valor)
end;

function varMin(nodo: arbol): integer;
begin
    if (nodo = nil) then
        varMin := -1
    else if (nodo^.hi <> nil) then
        varMin := varMin(nodo^.hi)
    else
        varMin := nodo^.dato
end;

function varMax(nodo: arbol): integer;
begin
    if (nodo = nil) then
        varMax := -1
    else if (nodo^.hd <> nil) then
        varMax := varMax(nodo^.hd)
    else 
        varMax := nodo^.dato
end;

procedure verValoresEnRango(a: arbol; min, max: integer);
begin
    if (a <> nil) then
    begin
        if (a^.dato >= min) and (a^.dato <= max) then
            writeln(a^.dato);
        verValoresEnRango(a^.hi, min, max);
        verValoresEnRango(a^.hd, min, max)
    end
end;

procedure borrarElemento(var a: arbol; valor: integer);
var
    aux: arbol;
begin
    if (a <> nil) then
    begin
        if (valor < a^.dato) then
            borrarElemento(a^.hi)
        else if (valor > a^.dato) then
            borrarElemento(a^.hd)
        else
        begin
            if (a^.hi = nil) and (a^.hd = nil) then
            begin
                dispose(a);
                a := nil
            end
            else if (a^.hi = nil) then
            begin
                aux := a;
                a := a^.hd;
                dispose(aux)
            end
            else if (a^.hd = nil) then
            begin
                aux := a;
                a := a^.hi;
                dispose(aux)
            end
            else
                aux := a;
                a := a^.hd;
                while (aux^.hi <> nil) do
                    aux := aux^.hi;
                a^.dato := aux^.dato;
                borrarElemento(a^.hd, a^.dato)
            end
        end
    end
end;

function busquedaDicotomica(arr: array; inicio, fin, valor: integer): integer;
var 
    medio: integer;
begin 
    if (fin >= inicio) then
    begin
        medio := inicio + (fin - inicio) div 2;

        if (arr[medio] = valor) then
            busquedaDicotomica := medio
        else if (arr[medio] > valor) then
            busquedaDicotomica := busquedaDicotomica(array, inicio, medio - 1, valor)
        else
            busquedaDicotomica := busquedaDicotomica(array, medio + 1, fin, valor)
    end
    else 
        busquedaDicotomica := -1;
end;

function sumarArray (arr: array; index, lim: integer): integer;
begin
    if (lim < index) then
        sumarArray := 0
    else
        sumarArray := array[index] + sumarArray(arr, index + 1)
end;

function generarArbol(l: lista): arbol;
var 
    actual: lista;
    a: arbol;
Begin
    a := nil;
    actual := l;
   
    while (l <> nil) do
    begin
        insertar(a, actual^.dato);
        actual := actual^.sig
    end

    generarArbol := a
end;

function Minimo(Lista: ^Nodo): integer;
var
  MinResto: integer;
begin
  if Lista = nil then
    Minimo := 0
  else if Lista^.Sig = nil then
    Minimo := Lista^.Datos
  else begin
    MinResto := Minimo(Lista^.Sig);
    if Lista^.Datos < MinResto then
      Minimo := Lista^.Datos
    else
      Minimo := MinResto;
  end;
end;
