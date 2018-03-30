# Is Odd Docker Service


Useful service for determining odd numbers.

### How To Use

```sh
$ docker build -t is-odd .
$ docker run -p 49160:8080 -d is-odd
$ curl http://0.0.0.0:49160/?number=44
```

Result

```json
{
    "result": false
}
```

Error

```json
{
    "error": "Error"
}
```
