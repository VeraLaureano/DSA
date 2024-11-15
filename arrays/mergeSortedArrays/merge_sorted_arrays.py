def merge_sorted_arrays(arr1, arr2):
    i, j = 0, 0  # Initialize pointers for both arrays
    result = []  # Empty list to store the merged array
    
    # Traverse both arrays until one is exhausted
    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            result.append(arr1[i])
            i += 1  # Move the pointer for the first array
        else:
            result.append(arr2[j])
            j += 1  # Move the pointer for the second array

    # If there are remaining elements in arr1, add them to result
    while i < len(arr1):
        result.append(arr1[i])
        i += 1

    # If there are remaining elements in arr2, add them to result
    while j < len(arr2):
        result.append(arr2[j])
        j += 1

    return result

# Example usage
arr1 = [1, 4, 7, 10]
arr2 = [2, 5, 6, 8, 9]

print("Array 1:", arr1)
print("Array 2:", arr2)
print("Merged Array:", merge_sorted_arrays(arr1, arr2))
