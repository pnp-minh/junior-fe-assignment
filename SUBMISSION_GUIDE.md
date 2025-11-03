# Submission Guide

Follow these steps to submit your assignment.

## Workflow Overview

1. Fork the repository
2. Clone your fork
3. Create a branch named `firstname-lastname`
4. Complete both parts
5. Push your work
6. Create a Pull Request
7. Email us the PR link

---

## Detailed Steps

### 1. Fork and Clone

```bash
# Fork at: https://github.com/pnp-minh/junior-fe-assignment
# Then clone your fork:
git clone https://github.com/YOUR-USERNAME/junior-fe-assignment.git
cd junior-fe-assignment
```

### 2. Create Your Branch

```bash
git checkout -b firstname-lastname
```

### 3. Complete the Assignment

**Part 1: Algorithms** (~30-45 min)
```bash
cd part-1-algorithms
# Complete question-1.js, question-2.js, and question-3.js
node question-1.js && node question-2.js && node question-3.js  # Test
```

**Part 2: React Component** (~1.5-2 hours)
```bash
cd part-2-react
npm install
npm run dev          # Develop
npm run build        # Test production build
```

### 4. Commit and Push

```bash
git add .
git commit -m "Your commit message"
git push origin firstname-lastname
```

### 5. Create Pull Request

1. Go to: https://github.com/pnp-minh/junior-fe-assignment
2. Click **"Pull Requests"** → **"New Pull Request"**
3. Click **"compare across forks"**
4. Select your fork and branch
5. Title: "Assignment Submission - [Your Name]"
6. Create the PR

### 6. Notify Us

Email **minh@papers-pens.com** with:
- Your PR link
- Your name
- Any notes or questions

---

Good luck!
