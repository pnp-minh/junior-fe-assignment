# Submission Guide

Thank you for taking the time to complete this assignment! Please follow these steps to submit your work.

## Submission Workflow

This is a **public repository**. You will work on your own branch and push it for review. Here's the simple process:

1. ✅ Clone the repository
2. ✅ Create your own branch
3. ✅ Complete the assignment
4. ✅ Push your branch
5. ✅ Email us when done

**Important**: We will review your branch directly. **No pull request needed!**

---

## Step-by-Step Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/pnp-minh/junior-fe-assignment.git
cd junior-fe-assignment
```

### 2. Create Your Branch

Use your name for the branch (lowercase, hyphenated):

```bash
git checkout -b firstname-lastname

# Examples:
# git checkout -b john-doe
# git checkout -b jane-smith
```

**Important**: Make sure you're on your branch before starting work!

```bash
# Verify your branch
git branch
# Should show: * firstname-lastname
```

### 3. Complete the Assignment

#### Part 1: Algorithms (30-45 min)

```bash
cd part-1-algorithms
# Read README.md
# Complete question-1.js
# Complete question-2.js
# Test: node question-1.js && node question-2.js
```

#### Part 2: React Component (1.5-2 hours)

```bash
cd part-2-react
# Read README.md
npm install
# Implement component based on Figma design
npm run dev  # Test locally
npm run build  # Verify build works
```

### 4. Commit Your Work

Make meaningful commits as you progress:

```bash
# After completing Part 1
git add part-1-algorithms/
git commit -m "Complete Part 1: Implement array reversal and character frequency counter"

# After starting Part 2
git add part-2-react/
git commit -m "Start Part 2: Create component structure"

# After implementing components
git add part-2-react/
git commit -m "Implement main component based on Figma design"

git add part-2-react/
git commit -m "Add responsive styling for mobile and desktop"

git add part-2-react/
git commit -m "Final polish and code cleanup"
```

**Good commit practices**:

- ✅ Commit frequently (not just one big commit)
- ✅ Use clear, descriptive messages
- ✅ Use present tense ("Add feature" not "Added feature")
- ❌ Don't commit node_modules or build files (already in .gitignore)

### 5. Push Your Branch

```bash
# Push your branch to the remote repository
git push origin firstname-lastname
```

If this is your first push, Git will ask you to set upstream:

```bash
git push --set-upstream origin firstname-lastname
```

### 6. Verify Your Submission

Go to the GitHub repository in your browser:

- You should see your branch in the branches dropdown
- Click on your branch to verify all files are there
- Check your commits are visible

### 7. Notify Us

Send an email to **minh@papers-pens.com**:

```
Subject: Assignment Complete - [Your Full Name]

Hi,

I've completed the Junior Frontend Developer technical assignment.

Branch name: firstname-lastname
GitHub repo: [repo URL]

[Optional: Any notes, challenges faced, or decisions made]

Thank you!

Best regards,
[Your Name]
```

---

## Testing Your Code Locally

Before pushing, test everything:

```bash
# Test Part 1
cd part-1-algorithms
node question-1.js
node question-2.js

# Test Part 2
cd part-2-react
npm run build    # Should complete without errors
npm run preview  # Preview production build
# Open http://localhost:5173 and test thoroughly
```

---

Good luck! We're excited to see your work! 🚀
