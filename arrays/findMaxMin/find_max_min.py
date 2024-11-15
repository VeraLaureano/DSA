def find_max_min(arr):
    """
    Encuentra el valor máximo y mínimo en un array.

    :param arr: El array de entrada.
    :return: Una tupla (max_value, min_value) donde max_value es el valor máximo y min_value es el valor mínimo.
    """
    if not arr:
        return None, None  # Si el array está vacío, retornamos None, None

    max_value = -999999  # Inicializamos el máximo con el primer elemento
    min_value = 999999  # Inicializamos el mínimo con el primer elemento

    # Recorremos el array a partir del segundo elemento
    for num in arr[1:]:
        if num > max_value:
            max_value = num
        if num < min_value:
            min_value = num

    return max_value, min_value

# Ejemplo de uso
arr = [1, 4, 7, 10, -2, 5, 3]
max_value, min_value = find_max_min(arr)

print("Array:", arr)
print("Valor máximo:", max_value)
print("Valor mínimo:", min_value)
