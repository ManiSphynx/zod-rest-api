export default {
  port: 1337,
  dbUri: "mongodb://localhost:27017/rest-tutorial",
  saltWorkFactor: 10,
  accessTokenExpiration: "15m",
  refreshTokenExpiration: "1y",
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCBRI51F13qIKfLEFtCUxI34XOg
dEmyyZH5L5cmBadv+gIiTfP56OMpQuFjW366tCZTtJTwyRDXYzY2td9GmPJPHbU8
H7dr4z0fEBaUq3+mr/UzXtS3ckGAZiTYLRgI/P18b6gJKUbEluhWL7Vrzh75Q6rE
gJq8AXEzByzj1VhKLwIDAQAB
-----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQCBRI51F13qIKfLEFtCUxI34XOgdEmyyZH5L5cmBadv+gIiTfP5
6OMpQuFjW366tCZTtJTwyRDXYzY2td9GmPJPHbU8H7dr4z0fEBaUq3+mr/UzXtS3
ckGAZiTYLRgI/P18b6gJKUbEluhWL7Vrzh75Q6rEgJq8AXEzByzj1VhKLwIDAQAB
AoGAXQc1blbOo3u0xZKT2ntmFQkO6V5G23/sqWPyZs6S3ScS+hUXi7ZqJHuZMKPb
5AlZu8utlEte72La1Sy17lyLpBW9pggphJL56N2pr6iviVCniJNNpOFH7ffwoAGt
QjzDO8Bbnc8aMvnS83I1TrAIup0vxyDhL2XJJeQ0uaMNHgECQQDDgKc1gH2NkClv
+nXJj9cuU7Miwh1slrfGDxqLbmZHur5lRLpWRLT85M4Li45Q13O3ut2p6ijusyjO
pAhnqxfvAkEAqUTo8z+96leiXT8Rpbw2l2ciQILvkjkKleNe06K1yA4LufjYQ8yT
BWNnHKAk+lzDSJ5aCUEKiQuSx1amdCGxwQJBAK0phvEcnhiFWC6W6T1e6nleKYzf
4rALzzrepeRaJL3j6kBIX8OJl8Vn5BjVw3hXXWefXDbj8N18Uui04bzxDoECQQCJ
h3O+MAweWxWQra2o+0NfwGwT/k6of7AaGKLzUUBhSwg8EfOlIpJRznH40CU7RiNk
3URKQI5Oyxh23fBgawABAkA+uhHdBN+dvrzVFdKXBNc1j1FHhFWjBCg4KWBDEj4h
TV4W1EHYdyx27BVwH4BgEfG0J++mbNHhBkPJXLR69We6
-----END RSA PRIVATE KEY-----`,
};
