struct Node {
    int data;
    struct Node* next;
};

void insertAtTheBeginning(struct Node** head, int value) {
    struct Node* newNode = createNode(value);
    newNode->next = *head;
    *head = newNode;
}