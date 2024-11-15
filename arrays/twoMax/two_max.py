def find_two_max(arr):
    """
    Encuentra los dos valores máximos en un array.

    :param arr: El array de entrada.
    :return: Una tupla (max1, max2) donde max1 es el valor máximo y max2 es el segundo valor máximo.
    """
    if len(arr) < 2:
        return None, None  # Si el array tiene menos de dos elementos, no podemos encontrar dos máximos

    # Inicializamos los dos máximos
    max1 = max(arr[0], arr[1])
    max2 = min(arr[0], arr[1])

    # Recorremos el array a partir del tercer elemento
    for num in arr[2:]:
        if num > max1:
            max2 = max1  # El anterior máximo pasa a ser el segundo máximo
            max1 = num  # Actualizamos el máximo
        elif num > max2:
            max2 = num  # Actualizamos el segundo máximo

    return max1, max2
