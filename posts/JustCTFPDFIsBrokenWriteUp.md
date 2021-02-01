---
date: '2021-02-01'
title: 'justCTF PDF is broken, and so is this file WriteUp'
---

challenge.pdf를 다운받아서 일단 열어보았다.
하지만 그 결과는...

![Broken PDF](/images/JustCTFPDFIsBroken/broken_pdf.png)

아무것도 보이지 않았다.

그래서 이 파일은 뭐지하고 열어보았다.

![Broken PDF Content](/images/JustCTFPDFIsBroken/broken_pdf_content.png)

뭔가 이상한 코드가 보인다.
사실 이게 뭔지는 아직도 잘 모르겠다.

그런데 이 파일을 계속 보다보면 이상한 object가 보인다. 9990번인데 9999번처럼 코드가 들어가 있는(아마 의도적으로 삽입한) object도 아니고 어디서도 참조하고 있지 않다.

![Weird Object](/images/JustCTFPDFIsBroken/weird_object.png)

뭔가 파일인거 같은데 magic number가 PK이다.

magic number가 PK인 파일은 xlsx 혹은 pptx이다.

따라서 저게 파일이 맞다고 가정하고 한번 추출을 해봤다.

당연하다면 당연하게도 안열렸다.

![Fail to Open PPT](/images/JustCTFPDFIsBroken/fail_to_open_ppt.png)

하지만 예전에 어디선가 ppt가 사실은 zip파일이라는 얘기를 들었던 것을 기억하고 zip파일로 변경해 열어봤다.

![Zip File](/images/JustCTFPDFIsBroken/zip_file.png)

오! 뭐가 있다.
false_flag.md는 아마 정말 false_flag인 것 같고 mutool이 뭔지 알아보기 위해 검색을 해보았다.
뭔가 pdf를 다루고 하는 툴이라는것을 알게되었다.

처음에는 발견하지 못했던 이상한 object가 하나 더 있었다. 4919번으로 이 stream 역시 추출해봤다.

일단 file signature를 볼 때 zlib이다.
마찬가지로 추출해본다.
`zlib-flate -uncompress`로 압축을 해제해봤다.

![Uncompressed Result](/images/JustCTFPDFIsBroken/uncompressed_result.png)

file signature를 보면 처음 시작이 `FF D8`로 jpg이다.
왜인지는 모르겠지만 이를 string으로 만들어 놨으니 python을 이용해서 binary로 바꿔주었다.

```python
f = open('challenge', 'r')
content = f.read()
print(content)
array = bytearray.fromhex(content[:-1])
f = open('render.jpg', 'wb')
f.write(array)
```

그 결과 얻어진 jpg를 보면

![render.jpg](/images/JustCTFPDFIsBroken/render.jpg)

flag를 얻을 수 있었다.
