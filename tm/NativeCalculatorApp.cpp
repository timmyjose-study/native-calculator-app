#include "NativeCalculatorApp.h"

namespace facebook::react {
NativeCalculatorApp::NativeCalculatorApp(std::shared_ptr<CallInvoker> jsInvoker)
    : NativeCalculatorAppCxxSpec(std::move(jsInvoker)) {}

int NativeCalculatorApp::add(jsi::Runtime &rt, int x, int y) { return x + y; }
int NativeCalculatorApp::sub(jsi::Runtime &rt, int x, int y) { return x - y; }
int NativeCalculatorApp::mul(jsi::Runtime &rt, int x, int y) { return x * y; }
int NativeCalculatorApp::div(jsi::Runtime &rt, int x, int y) {
  if (y == 0) {
    return 0;
  }
  return x / y;
}
} // namespace facebook::react