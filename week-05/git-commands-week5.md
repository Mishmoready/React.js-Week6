## Git Commands as at Week 5

### <span style="color: purple; background-color:white;">First time Git setup</span>

Checking the git version installed

```
git --version
```

Setting up the username and email

```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

### <span style="color: purple; background-color:white;">Initialize an empty local Git repository</span>

```
git init
```

### <span style="color: purple; background-color:white;">Adding and Committing files to Git</span>

1. Adding a single file

```
git add index.html
```

1. Adding multiple files (separate each filename by a space)

```
git add index.html style.css
```

1. To add all new files in one go (simplist but not always recommended)

```
git add .
```

2. Making a git commit

```
git commit -m "commit message"
```

3. Push your changes to GitHub

```
git push
```

### <span style="color: purple; background-color:white;">Connecting your existing local repo with GitHub</span>

1. Add remote repo URL

```
git remote add origin REPLACE_WITH_YOUR_GIT_REPO_URL
```

2. Push the commits (so make sure you have some commit(s)) in the current branch of your repository to the main branch of the remote called origin.

```
git push –u origin main
```

### <span style="color: purple; background-color:white;">Pull the latest code from the remote repo</span>

Pull data from the remote repo when collaborating with a team OR if you make changes to your code via the GitHub website

```
git pull
```

### <span style="color: purple; background-color:white;">Create a clone (or copy) of a remote repository (copying someone else's repo to your computer)</span>

1. Create a new Repo on GitHub.com and copy the repo’s URL. Then in your terminal, in the directory you want to clone your repo to, type:

```
git clone REPLACE_WITH_YOUR_GIT_REPO_URL
```

2. Change Directory into your cloned repo folder.

```
cd YOUR_REPO_NAME
```

3. Create a new file (e.g. hello.html) inside your cloned repo folder in VSC, then run

```
[add and commit your files as per usual]
```

4. Push your changes to GitHub

```
git push
```

### <span style="color: purple; background-color:white;">Viewing the Git history and other </span>

Default git log

```
git log
```

Less detailed version of the log

```
git log --oneline
```

More detailed version of the log

```
git log -p
```

Displays the state of the working directory and the staging area

```
git status
```

### <span style="color: purple; background-color:white;">Branches</span>

View your current branch list

```
git branch
```

1. Create a new branch based on the current commit

```
git branch MY_NEW_BRANCH
```

2. Switch to your new branch

```
git checkout MY_NEW_BRANCH
```

3. Set origin and branch upstream and push

```
git push –u origin MY_NEW_BRANCH
```

4. Create new files (eg hello.html)

```
[add and commit your files as per usual]
```

### <span style="color: purple; background-color:white;">Merging Branches</span>

1. Make sure you’re on the target branch you want to merge to

```
git checkout main
```

2. Specify the branch you want to merge

```
git merge mybranch
```

3. Push the new files branch details

```
git push
```

### <span style="color: purple; background-color:white;">Git Revert (Undo changes)</span>

1. Copy the commit ID of the commit you want to undo

```
git log
```

2. Run the git revert command

```
git revert a6d987d1aae743e29ea70f3e766b6bc2351e9bc2
```

### <span style="color: purple; background-color:white;">Workflow: A popular Git workflow:</span>

1. In VSC, Buddy creates a branch called “buddy/homepage”
2. In VSC, Buddy finishes his homepage code, pushes his code to GitHub.
3. At GitHub.com, Buddy opens a pull request, gathers feedback from team about his code if necessary, and then merges his code to “main” branch via the GitHub interface.
4. At GitHub, Buddy deletes his “buddy/homepage” branch.
5. In VSC, Buddy switches to “main” branch, and runs git pull (which will include not only his changes but any changes made by his team-mates).
6. In VSC, Buddy then deletes his “buddy/homepage” branch locally by using git branch -d buddy/homepage
7. In VSC, Buddy repeats from step 1 as required

### <span style="color: purple; background-color:white;">Workflow: If you need to reuse a branch:</span>

1. In VSC, Buddy creates a branch called “buddy/homepage”
2. In VSC, Buddy finishes his homepage code, pushes his code to GitHub.
3. At GitHub, Buddy opens a pull request (you may have to manually open one after the first merge), gathers feedback from team about his code if necessary, and then merges his code to “main” branch via the GitHub interface.
4. In VSC, Buddy switches back to “buddy/homepage” branch because he wants to continue using the same branch.
5. In VSC, Buddy merges the “main” branch into “buddy/homepage”.
6. In VSC, Buddy repeats from step 2 as required

Git Cheat Sheet: https://education.github.com/git-cheat-sheet-education.pdf
