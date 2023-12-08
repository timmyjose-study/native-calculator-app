#!/bin/bash

#export HOST_OS="darwin-x86_64"
export ANDROID_NDK_HOME="/Users/z0ltan/Library/Android/sdk/ndk/26.1.10909125"
#export ANDROID_NDK_VERSION="26.1.10909125"
#export ANDROID_NDK_BIN="${ANDROID_NDK_HOME}/${ANDROID_NDK_VERSION}/${HOST_OS}"/bin
#
#cargo clean
#cargo build --target aarch64-linux-android --release
#cargo build --target arm-linux-androideabi --release
#cargo build --target i686-linux-android --release
#cargo build --target x86_64-linux-android --release

# NOTE for CIl: this requires the `cargo-ndk`tool to be already installed.
cargo ndk --target aarch64-linux-android --platform 21 -- build --release
cargo ndk --target armv7-linux-androideabi --platform 21 -- build --release
cargo ndk --target i686-linux-android --platform 21 -- build --release
cargo ndk --target x86_64-linux-android --platform 21 -- build --release