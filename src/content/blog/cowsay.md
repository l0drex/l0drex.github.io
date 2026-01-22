---
title: Cowsay and its many options
date: 2023-01-23
---

Did you know you can let a cow say things on your Linux terminal? Just install `cowsay` with your favorite package
manager, and give it a go:

```bash
cowsay "Hello friends!"
```

```
 ________________ 
< Hello friends! >
 ---------------- 
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

```

But did you know you can change the character of the cow? There are several ways to do this:

1. Use `cowthink` to let the cow **think**.
2. Alter the **character** of the cow with different options, as documented in
   the [man page](https://man.archlinux.org/man/extra/cowsay/cowsay.1.en):
   > There are several provided modes which change the appearance of the cow depending on its particular
   emotional/physical state. The -b option initiates Borg mode; -d causes the cow to appear dead; -g
   invokes greedy mode; -p causes a state of paranoia to come over the cow; -s makes the cow appear thoroughly stoned;
   -t yields a tired cow; -w is somewhat the opposite of -t, and initiates wired
   mode; -y brings on the cow's youthful appearance.
3. You can even choose between **different animals and characters** by selecting a different cowfile. Exampe files are
   under _/usr/share/cows_.
