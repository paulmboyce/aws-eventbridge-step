Instructions to install CLI V2

```
aws --version
```

v1...

# UNINSTALL V1

```
sudo yum remove awscli
```

```
aws --version
```

.. not instaled

# INSTALL V2

```
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

Confirm changed version:

```
/usr/local/bin/aws --version
```

v2 is now installed (NOTE; OPEN A NEW TERMINAL TO SEE NEW VERSION)


SEE: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
