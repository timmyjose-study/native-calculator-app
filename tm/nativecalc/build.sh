#!/bin/bash

cargo clean

cargo build --target aarch64-linux-android
cargo build --target arm-linux-androideabi
cargo build --target i686-linux-android
cargo build --target x86_64-linux-android