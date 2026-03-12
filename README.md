# AVL-Tree-Visualizer
Interactive AVL Tree Visualizer built with HTML, CSS, and JavaScript to demonstrate self-balancing tree operations and rotations.
1️⃣ Definition

An AVL Tree is a binary search tree in which:

The height difference between the left and right subtree is ≤ 1 for every node.

If the balance becomes disturbed, rotations are performed to restore balance.
2️⃣ Balance Factor

The Balance Factor determines whether the tree is balanced.

Formula
Balance Factor = Height(Left Subtree) – Height(Right Subtree)
Possible Values:
-1  → Balanced
 0  → Balanced
+1  → Balanced
Example
      30
     /  \
   20    40
BF(30) = Height(20) - Height(40)
       = 1 - 1
       = 0

Tree is balanced.




Types of Rotations

AVL Trees maintain balance using four rotations.

1. Left Rotation (RR Case)

Occurs when right subtree becomes heavier.

Example:

   10
     \
      20
        \
         30

After rotation:

      20
     /  \
   10    30
2. Right Rotation (LL Case)

Occurs when left subtree becomes heavier.

Before rotation:

      30
     /
    20
   /
 10

After rotation:

      20
     /  \
   10    30
3. Left-Right Rotation (LR Case)

Occurs when:

Node is left heavy

Left child is right heavy

Before:

      30
     /
    10
      \
       20

After rotations:

      20
     /  \
   10    30
4. Right-Left Rotation (RL Case)

Occurs when:

Node is right heavy

Right child is left heavy

Before:

      10
        \
         30
        /
       20

After rotations:

      20
     /  \
   10    30
   
5️⃣ Operations in AVL Tree
1. Insertion

Insert node like a Binary Search Tree.

Update height.

Check balance factor.

Perform rotation if required.

2. Deletion

Delete node like BST deletion.

Update heights.

Check balance factor.

Perform rotations if needed.

6️⃣ Time Complexity
Operation	Time Complexity
Search	O(log n)
Insert	O(log n)
Delete	O(log n)

AVL trees are faster than normal BST because they remain balanced.