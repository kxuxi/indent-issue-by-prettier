# Summary
When using Prettier with formatOnSave enabled, modifying the indentation of a definition right before a return statement causes an additional, incorrect indentation to be applied to the return statement itself upon saving. However, saving the file again restores the return statement to its correct indentation. The expected behavior is that the return statement should not be indented incorrectly on the first save.

# Github Repository to Reproduce Issue
[Link to repo](https://github.com/kxuxi/indent-issue-by-prettier)

# Steps To Reproduce:
Enable formatOnSave in VSCode.
Modify the indentation of a definition just before a return statement.
Save the file. The return statement will be incorrectly indented.
Save the file again. The return statement returns to the correct indentation.
Expected result
On the first save, the return statement should remain correctly indented without any additional indentation.

# Actual result
On the first save, the return statement is incorrectly indented by an additional level. The second save corrects the indentation automatically.

# Additional information
N/A

# Screenshots