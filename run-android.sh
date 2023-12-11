#!/usr/bin/env bash

# https://reactnative.dev/docs/environment-setup
export ANDROID_HOME="$HOME/Library/Android/sdk"
export PATH="$PATH:$ANDROID_HOME/emulator"
export PATH="$PATH:$ANDROID_HOME/platform-tools"

echo "ANDROID_HOME = ${ANDROID_HOME}"

echo "Installing cargo targets for IOS"
rustup target install aarch64-apple-ios
rustup target install aarch64-apple-ios-sim

echo "Installing cargo targets for Android"
#rustup target install arm-linux-androideabi
rustup target install armv7-linux-androideabi
rustup target install aarch64-linux-android
rustup target install i686-linux-android
rustup target install x86_64-linux-android

echo "Installing cargo-ndk"
cargo install cargo-ndk

echo "CWD =$(pwd)"

echo "Building and running Android"
cd tm/nativecalc && echo "curr dir = $(pwd)" && ./build.sh && cd ../../
yarn android

