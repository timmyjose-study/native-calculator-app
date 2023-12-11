#!/usr/bin/env bash

export ANDROID_NDK_HOME="$ANDROID_HOME/ndk/26.1.10909125"

# NOTE for CI: this requires the `cargo-ndk`tool to be already installed.
cargo ndk --target aarch64-linux-android --platform 21 -- build --release
cargo ndk --target armv7-linux-androideabi --platform 21 -- build --release
cargo ndk --target i686-linux-android --platform 21 -- build --release
cargo ndk --target x86_64-linux-android --platform 21 -- build --release