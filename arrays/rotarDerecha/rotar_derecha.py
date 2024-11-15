def rotar_derecha_facil(arr, k):
    """
    Rota los elementos de un array a la derecha 'k' posiciones.

    :param arr: Array original.
    :param k: Número de posiciones a rotar.
    :return: Array rotado.
    """
    n = len(arr)
    k = k % n  # En caso de que k sea mayor que n
    return arr[-k:] + arr[:-k]

def rotar_derecha(arr, k):
    """
    Rota los elementos de un array a la derecha 'k' posiciones.

    :param arr: Array original.
    :param k: Número de posiciones a rotar.
    :return: Array rotado.
    """
    n = len(arr)
    k = k % n  # En caso de que k sea mayor que n
    for i in range(k):
        # Mover el último elemento al principio del array
        last_element = arr[n - 1]
        for j in range(n - 1, 0, -1):
            arr[j] = arr[j - 1]
        arr[0] = last_element
    return arr

# Ejemplo de uso
arr = [1, 2, 3, 4, 5, 6, 7]
k = 3
print("Array original:", arr)
print("Array después de rotar hacia la derecha:", rotar_derecha(arr, k))
