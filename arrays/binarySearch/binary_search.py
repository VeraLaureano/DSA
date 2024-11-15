def binary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid # encontrado
        elif arr[mid] < target:
            low = mid + 1 # mitad derecha
        else:
            high = mid - 1 # mitad izquierda
    
    return -1 # no encontrado

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

print('#########')
print(binary_search(arr, 2))
print('#########')

# Actua como experto en ciencias de la computacion. Estoy haciendo un respositorio en github que es un laboratorio de dsa con python, necesito que me des todos sobre los arrays con python, algoritmos y 
