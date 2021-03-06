import { NETWORKS } from './types'

export const checkBlockHash = value => {
  value = String(value).toLowerCase()
  if (/^(0x)[0-9a-f]{64}$/.test(value)) return value
  if (/^[0-9a-f]{64}$/.test(value)) return '0x' + value
  return null
}

export const isBlockHash = value => checkBlockHash(value) !== null

export const isHashOrNuber = (hashOrNumber, toHex = true) => {
  let hash = (isBlockHash(hashOrNumber)) ? hashOrNumber : null
  let number = (!isNaN(parseInt(hashOrNumber)) && !hash) ? hashOrNumber : null
  number = (number !== null && toHex) ? toHexStr(hashOrNumber) : number
  return { hash, number }
}

export const isHexStr = str => /^0x[0-9a-f]*$/.test(str)

export const toHexStr = (value, ox = '0x') => {
  if (isHexStr(value) || value === null) return value
  let hex = ox + Number(value).toString(16)
  return (parseInt(hex) === Number(value)) ? hex : value
}

export const netName = id => NETWORKS[id]
export const isNet = (id, name) => netName(id) === name

export const toDecimal = value => {
  return parseInt(Number(value).toString(10))
}
