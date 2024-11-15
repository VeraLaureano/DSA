def find_two_min(arr):
    """
    Encuentra los dos valores mínimos en un array.

    :param arr: El array de entrada.
    :return: Una tupla (min1, min2) donde min1 es el valor mínimo y min2 es el segundo valor mínimo.
    """
    if len(arr) < 2:
        return None, None  # Si el array tiene menos de dos elementos, no podemos encontrar dos mínimos

    # Inicializamos los dos mínimos
    min1 = min(arr[0], arr[1])
    min2 = max(arr[0], arr[1])

    # Recorremos el array a partir del tercer elemento
    for num in arr[2:]:
        if num < min1:
            min2 = min1  # El anterior mínimo pasa a ser el segundo mínimo
            min1 = num  # Actualizamos el mínimo
        elif num < min2:
            min2 = num  # Actualizamos el segundo mínimo

    return min1, min2