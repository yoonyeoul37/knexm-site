# -*- coding: utf-8 -*-
# 네이버 소유확인 넣기 — C:\knexm-site 폴더에 넣고 실행하세요
import os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
TAG = '<meta name="naver-site-verification" content="470ff0b23549711d95a6855fdbfd56e117899326" />'
FILE_NAME = "naver184d7fb476badf99a52fbaf537463c54.html"
FILE_TEXT = "naver-site-verification: naver184d7fb476badf99a52fbaf537463c54.html"

def main():
    idx = os.path.join(HERE, "index.html")
    if not os.path.exists(idx):
        print("❌ index.html이 없어요. C:\\knexm-site 폴더 안에서 실행해 주세요"); sys.exit(1)
    raw = open(idx, "rb").read().decode("utf-8")
    if "naver-site-verification" in raw:
        print("이미 적용돼 있어요"); return
    nl = "\r\n" if "\r\n" in raw else "\n"
    anchor = '<link rel="canonical" href="https://knexm.com/">'
    if raw.count(anchor) != 1:
        print("❌ index.html에서 넣을 자리를 못 찾았어요"); print("아무것도 저장하지 않았어요"); sys.exit(1)
    raw = raw.replace(anchor, TAG + nl + anchor)
    open(idx, "wb").write(raw.encode("utf-8"))
    print("✔ index.html (네이버 태그)")
    open(os.path.join(HERE, FILE_NAME), "wb").write(FILE_TEXT.encode("utf-8"))
    print("✔", FILE_NAME, "(네이버 확인 파일)")
    print(); print("완료: 네이버 소유확인을 넣었어요")

if __name__ == "__main__":
    main()
