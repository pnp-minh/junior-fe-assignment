# Submission Guide

Thank you for taking the time to complete this assignment! Please follow these steps to submit your work.

## Submission Workflow

This is a **public repository**. You will fork it, work on your own branch, and submit via pull request. Here's the process:

1. ✅ Fork the repository
2. ✅ Clone your fork
3. ✅ Create your own branch
4. ✅ Complete the assignment
5. ✅ Push to your fork
6. ✅ Create a pull request
7. ✅ Email us when done

---

## Step-by-Step Instructions

### 1. Fork the Repository

- Go to: https://github.com/pnp-minh/junior-fe-assignment
- Click the **Fork** button (top right)
- This creates a copy under your GitHub account

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/junior-fe-assignment.git
cd junior-fe-assignment
```

Replace `YOUR-USERNAME` with your GitHub username.

### 3. Create Your Branch

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

### 4. Complete the Assignment

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

### 5. Commit Your Work

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

### 6. Push to Your Fork

```bash
# Push your branch to your forked repository
git push origin firstname-lastname
```

If this is your first push, Git will ask you to set upstream:

```bash
git push --set-upstream origin firstname-lastname
```

### 7. Create a Pull Request

1. **Go to the original repository**: https://github.com/pnp-minh/junior-fe-assignment

2. **Click "Pull Requests"** tab

3. **Click "New Pull Request"**

4. **Click "compare across forks"** (important!)

5. **Select your fork and branch**:
   - **base repository**: `pnp-minh/junior-fe-assignment` (base: `main`)
   - **head repository**: `YOUR-USERNAME/junior-fe-assignment` (compare: `firstname-lastname`)

6. **Add a title**: "Assignment Submission - [Your Name]"

7. **Add description** (optional but recommended):
   ```
   ## Submission Details
   - Name: [Your Full Name]
   - Completion Time: [Approximate hours spent]

   ## Notes
   [Any challenges faced, decisions made, or things you'd like us to know]
   ```

8. **Click "Create Pull Request"**

### 8. Notify Us

Send an email to **minh@papers-pens.com** using the template below.

**📧 Copy-paste ready email template** → See [EMAIL_TEMPLATE_FOR_CANDIDATES.md](EMAIL_TEMPLATE_FOR_CANDIDATES.md)

**Quick email template:**

```
Subject: Assignment Complete - [Your Full Name]

Hi Minh,

I've completed the Junior Frontend Developer technical assignment and created a Pull Request.

Pull Request Link: [Paste your PR link here]
GitHub Username: [Your GitHub username]
Time Spent: [Approximate hours]

Notes (optional):
- [Any challenges you faced]
- [Technical decisions you made]
- [Questions or clarifications]

Thank you for the opportunity! Looking forward to hearing from you.

Best regards,
[Your Full Name]
[Your Email]
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
