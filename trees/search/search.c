struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

struct TreeNode* buscar(struct TreeNode* node, int value) {
    if (!node || node->val == value) {
        return node;
    } else if (value < node->val) {
        return buscar(node->left, value);
    } else {
        return buscar(node->right, value);
    }
}