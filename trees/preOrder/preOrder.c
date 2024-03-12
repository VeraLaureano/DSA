struct TreeNode {
    int data;
    struct TreeNode* left;
    struct TreeNode* right;
};

void preOrderTraversal(struct TreeNode* root) {
  if (root != NULL) {
    printf("%d ", root->data);
    preOrderTraversal(root->left);
    preOrderTraversal(root->right);
  }
}
