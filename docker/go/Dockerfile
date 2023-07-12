# とりあえずgolangのバージョンは最新を使用
FROM golang:latest
# アップデートとgitのインストール
RUN apt-get update && apt-get install -y git
RUN go install github.com/go-delve/delve/cmd/dlv@latest
RUN go install github.com/cosmtrek/air@latest

WORKDIR /go/src
CMD ["air", "-c", ".air.toml"]