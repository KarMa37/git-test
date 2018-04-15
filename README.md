# Git - version control system

## What's here and how to use this repository?
This repository contains all tasks and all exercises we did during classes.


Moreover you can also find here presentation from lectures. Wow.
When I change presentation - I'll simply update it by new version using Git power, by commiting it :wink:

### Presentation files:
* [in *presentations* folder. Or click this link](/presentations/isa-git-michalczukm.pdf)


--------
## Links that will help you to prepare for classes:
Those are only 3 links - you should spend about 30 minutes for all of them :slightly_smiling_face:

1. On this page you've got nice explanation of commit concept: https://www.sbf5.com/~cduan/technical/git/git-1.shtml
1. Please check the "Terminology", part, there're 9 basic concepts: http://juristr.com/blog/2013/04/git-explained/#Terminology
1. https://try.github.io/levels/1/challenges/1 - there it nice git in command console tutorial. Its creators wrote that it should take up to 15 minutes :slightly_smiling_face:

:sunglasses: You can find more refs at the end of the presentation.

--------

## Want more info for dealing with merge conflicts?
Check [this article](https://www.git-tower.com/learn/git/ebook/en/command-line/advanced-topics/merge-conflicts). 
I'll talk more about resolving conflicts during second part of git classes.

--------

## How to merge **feature/*** branch into develop - in the right and easy way
F.e. you have task called _MP-1 add search engine_, so lets create branch for it.

1. Checkout **develop** branch - `git checkout develop`
1. Pull **develop** to be up to date - `git pull`
1. Create new branch **feature/MP-1-add-search-engine** here, on the top of **develop**
    * Create commits on branch **feature/MP-1-add-search-engine**, put there your changes connected to this feature
    * Push **feature/MP-1-add-search-engine** to server - do it frequently. Without push you won't have it on GitHub :)
1. When you're ready - take all changes from **develop** to your branch. Be up to date with your collagues changes!
    * checkout **develop** again. - `git checkout develop` 
    * pull **develop** To be up to date with others collagues work - `git pull`
    * get back to your branch - and merge current **develop** into it. `git checkout feature/MP-1-add-search-engine` and then `git merge develop`
1. When your're up to date with develop and resolve all merge conflicts. Not its finally time to close your feature :)
    * checkout **develop** again. - `git checkout develop` 
    * merge your feature to develop (or create pull request for it) - `git merge feature/MP-1-add-search-engine`
    * push your changes (so your merge on **develop**, you should be still on **develop** branch) - `git push`
1. Congrats - now the whole team can `git fetch` and `git pull` **develop** to have your changes :wink:
