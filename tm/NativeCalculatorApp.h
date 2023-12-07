#pragma once

#if __has_include(<React-Codegen/AppSpecsJSI.h>)
#include <React-Codegen/AppSpecsJSI.h>
#elif __has_include("AppSpecsJSI.h")
#include "AppSpecsJSI.h"
#endif

#include <memory>

namespace facebook::react {

class NativeCalculatorApp
    : public NativeCalculatorAppCxxSpec<NativeCalculatorApp> {
public:
  NativeCalculatorApp(std::shared_ptr<CallInvoker> jsInvoker);

  int add(jsi::Runtime &rt, int x, int y);
  int sub(jsi::Runtime &rt, int x, int y);
  int mul(jsi::Runtime &rt, int x, int y);
  int div(jsi::Runtime &rt, int x, int y);
  int the_answer(jsi::Runtime &rt);
};
} // namespace facebook::react