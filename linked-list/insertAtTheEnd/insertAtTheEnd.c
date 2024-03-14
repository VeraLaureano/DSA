struct Node {
    int data;
    struct Node* next;
};

void insertAtTheEnd(struct Node** actual, struct Node** last, int data) {
    struct Node* newNode = createNode(data);

    if (*actual == NULL) {
        *actual = newNode;
    } else {
        struct Node* current = *actual;
        while (current->next != NULL) {
            current = current->next;
        }
        current->next = newNode;
    }
    
    *last = newNode;
}
