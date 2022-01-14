---
layout: page
title: 'Podman 적용하기'
date: '2021-09-01'
---

Docker Desktop이 유료화되면서 podman을 사용해야할 필요성이 생겼고 이를 적용하기 위한 방법을 설명합니다.

## Podman 설치(macOS 기준)

```sh
brew install podman
```

```sh
podman machine init
```

```sh
podman machine start
```

## Podman 설정

### Host Machine

Podman에서 `-p` 옵션을 쓰기 위해서는 `--network=bridge`옵션이 필요합니다.
이것을 매번 설정하지 않기 위해서 podman이 설치된 머신의 `~/.config/containers/containers.conf`의 `[containers]` 밑에 `rootless_network = "cni"`를 추가해줘야합니다.

### Virtual Machine

podmand에서 docker.io에 있는 이미지를 쓸 때 `postgres:latest`와 같이 short-hand image name으로 쓸 수 없고 `docker.io/postgres:latest`와 같이 긴 이름으로 써야합니다.
이러한 상황을 피하기 위해서 가상머신의 설정을 변경해줘야합니다.
`podman machine ssh`로 docker가 깔려있는 가상머신에 접근할 수 있습니다.
가상머신의 `/etc/containers/registries.conf`파일의 맨 밑에 있는 `short-name-mode`의 값을 `enforcing`에서 `permissive`로 변경해줘야합니다.

