// This file is generated
import {
  anyValue,
  asAny,
  asBoolean,
  asList,
  asNumber,
  asString,
  listOf,
  mapValue,
  numericValue,
  stringValue,
  terraformFunction,
} from "./terraform-functions";
// eslint-disable-next-line jsdoc/require-jsdoc
export class Fn {
  /**
   * {@link https://www.terraform.io/docs/language/functions/endswith.html endswith} takes two values: a string to check and a suffix string. The function returns true if the first string ends with that exact suffix.
   * @param {string} str
   * @param {string} suffix
   */
  static endswith(str: string, suffix: string) {
    return asBoolean(
      terraformFunction("endswith", [stringValue, stringValue])(str, suffix)
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/merge.html merge} takes an arbitrary number of maps or objects, and returns a single map or object that contains a merged set of elements from all arguments.
   * @param {Array} maps
   */
  static merge(maps: any[]) {
    return asAny(terraformFunction("merge", [listOf(anyValue)])(maps));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/parseint.html parseint} parses the given string as a representation of an integer in the specified base and returns the resulting number. The base must be between 2 and 62 inclusive.
   * @param {any} number
   * @param {number} base
   */
  static parseint(number: any, base: number) {
    return asAny(
      terraformFunction("parseint", [anyValue, numericValue])(number, base)
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/startswith.html startswith} takes two values: a string to check and a prefix string. The function returns true if the string begins with that exact prefix.
   * @param {string} str
   * @param {string} prefix
   */
  static startswith(str: string, prefix: string) {
    return asBoolean(
      terraformFunction("startswith", [stringValue, stringValue])(str, prefix)
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/timecmp.html timecmp} compares two timestamps and returns a number that represents the ordering of the instants those timestamps represent.
   * @param {string} timestamp_a
   * @param {string} timestamp_b
   */
  static timecmp(timestamp_a: string, timestamp_b: string) {
    return asNumber(
      terraformFunction("timecmp", [stringValue, stringValue])(
        timestamp_a,
        timestamp_b
      )
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/alltrue.html alltrue} returns `true` if all elements in a given collection are `true` or `&#34;true&#34;`. It also returns `true` if the collection is empty.
   * @param {Array} list
   */
  static alltrue(list: any[]) {
    return asBoolean(terraformFunction("alltrue", [listOf(anyValue)])(list));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/anytrue.html anytrue} returns `true` if any element in a given collection is `true` or `&#34;true&#34;`. It also returns `false` if the collection is empty.
   * @param {Array} list
   */
  static anytrue(list: any[]) {
    return asBoolean(terraformFunction("anytrue", [listOf(anyValue)])(list));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/chunklist.html chunklist} splits a single list into fixed-size chunks, returning a list of lists.
   * @param {Array} list
   * @param {number} size
   */
  static chunklist(list: any[], size: number) {
    return asList(
      terraformFunction("chunklist", [listOf(anyValue), numericValue])(
        list,
        size
      )
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/coalesce.html coalesce} takes any number of arguments and returns the first one that isn&#39;t null or an empty string.
   * @param {Array} vals
   */
  static coalesce(vals: any[]) {
    return asAny(terraformFunction("coalesce", [listOf(anyValue)])(vals));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/coalescelist.html coalescelist} takes any number of list arguments and returns the first one that isn&#39;t empty.
   * @param {Array} vals
   */
  static coalescelist(vals: any[]) {
    return asAny(terraformFunction("coalescelist", [listOf(anyValue)])(vals));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/compact.html compact} takes a list of strings and returns a new list with any empty string elements removed.
   * @param {Array} list
   */
  static compact(list: string[]) {
    return asList(terraformFunction("compact", [listOf(anyValue)])(list));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/concat.html concat} takes two or more lists and combines them into a single list.
   * @param {Array} seqs
   */
  static concat(seqs: any[]) {
    return asAny(terraformFunction("concat", [listOf(anyValue)])(seqs));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/contains.html contains} determines whether a given list or set contains a given single value as one of its elements.
   * @param {any} list
   * @param {any} value
   */
  static contains(list: any, value: any) {
    return asAny(
      terraformFunction("contains", [anyValue, anyValue])(list, value)
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/distinct.html distinct} takes a list and returns a new list with any duplicate elements removed.
   * @param {Array} list
   */
  static distinct(list: any[]) {
    return asList(terraformFunction("distinct", [listOf(anyValue)])(list));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/element.html element} retrieves a single element from a list.
   * @param {any} list
   * @param {number} index
   */
  static element(list: any, index: number) {
    return asAny(
      terraformFunction("element", [anyValue, numericValue])(list, index)
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/flatten.html flatten} takes a list and replaces any elements that are lists with a flattened sequence of the list contents.
   * @param {any} list
   */
  static flatten(list: any) {
    return asAny(terraformFunction("flatten", [anyValue])(list));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/index.html index} finds the element index for a given value in a list.
   * @param {any} list
   * @param {any} value
   */
  static index(list: any, value: any) {
    return asAny(terraformFunction("index", [anyValue, anyValue])(list, value));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/keys.html keys} takes a map and returns a list containing the keys from that map.
   * @param {any} inputMap
   */
  static keys(inputMap: any) {
    return asAny(terraformFunction("keys", [anyValue])(inputMap));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/length.html length} determines the length of a given list, map, or string.
   * @param {any} value
   */
  static lengthOf(value: any) {
    return asNumber(terraformFunction("length", [anyValue])(value));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/lookup.html lookup} retrieves the value of a single element from a map, given its key. If the given key does not exist, the given default value is returned instead.
   * @param {any} inputMap
   * @param {string} key
   * @param {Array} defaultValue
   */
  static lookup(inputMap: any, key: string, defaultValue: any[]) {
    return asAny(
      terraformFunction("lookup", [anyValue, stringValue, listOf(anyValue)])(
        inputMap,
        key,
        defaultValue
      )
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/matchkeys.html matchkeys} constructs a new list by taking a subset of elements from one list whose indexes match the corresponding indexes of values in another list.
   * @param {Array} values
   * @param {Array} keys
   * @param {Array} searchset
   */
  static matchkeys(values: any[], keys: any[], searchset: any[]) {
    return asList(
      terraformFunction("matchkeys", [
        listOf(anyValue),
        listOf(anyValue),
        listOf(anyValue),
      ])(values, keys, searchset)
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/one.html one} takes a list, set, or tuple value with either zero or one elements. If the collection is empty, `one` returns `null`. Otherwise, `one` returns the first element. If there are two or more elements then `one` will return an error.
   * @param {any} list
   */
  static one(list: any) {
    return asAny(terraformFunction("one", [anyValue])(list));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/range.html range} generates a list of numbers using a start value, a limit value, and a step value.
   * @param {Array} params
   */
  static range(params: number[]) {
    return asList(terraformFunction("range", [listOf(numericValue)])(params));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/reverse.html reverse} takes a sequence and produces a new sequence of the same length with all of the same elements as the given sequence but in reverse order.
   * @param {any} list
   */
  static reverse(list: any) {
    return asAny(terraformFunction("reverse", [anyValue])(list));
  }
  /**
   * The {@link https://www.terraform.io/docs/language/functions/setintersection.html setintersection} function takes multiple sets and produces a single set containing only the elements that all of the given sets have in common. In other words, it computes the [intersection](https://en.wikipedia.org/wiki/Intersection_\(set_theory\)) of the sets.
   * @param {Array} first_set
   * @param {Array} other_sets
   */
  static setintersection(first_set: any[], other_sets: any[]) {
    return asList(
      terraformFunction("setintersection", [
        listOf(anyValue),
        listOf(anyValue),
      ])(first_set, other_sets)
    );
  }
  /**
   * The {@link https://www.terraform.io/docs/language/functions/setproduct.html setproduct} function finds all of the possible combinations of elements from all of the given sets by computing the [Cartesian product](https://en.wikipedia.org/wiki/Cartesian_product).
   * @param {Array} sets
   */
  static setproduct(sets: any[]) {
    return asAny(terraformFunction("setproduct", [listOf(anyValue)])(sets));
  }
  /**
   * The {@link https://www.terraform.io/docs/language/functions/setsubtract.html setsubtract} function returns a new set containing the elements from the first set that are not present in the second set. In other words, it computes the [relative complement](https://en.wikipedia.org/wiki/Complement_\(set_theory\)#Relative_complement) of the second set.
   * @param {Array} a
   * @param {Array} b
   */
  static setsubtract(a: any[], b: any[]) {
    return asList(
      terraformFunction("setsubtract", [listOf(anyValue), listOf(anyValue)])(
        a,
        b
      )
    );
  }
  /**
   * The {@link https://www.terraform.io/docs/language/functions/setunion.html setunion} function takes multiple sets and produces a single set containing the elements from all of the given sets. In other words, it computes the [union](https://en.wikipedia.org/wiki/Union_\(set_theory\)) of the sets.
   * @param {Array} first_set
   * @param {Array} other_sets
   */
  static setunion(first_set: any[], other_sets: any[]) {
    return asList(
      terraformFunction("setunion", [listOf(anyValue), listOf(anyValue)])(
        first_set,
        other_sets
      )
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/slice.html slice} extracts some consecutive elements from within a list.
   * @param {any} list
   * @param {number} start_index
   * @param {number} end_index
   */
  static slice(list: any, start_index: number, end_index: number) {
    return asAny(
      terraformFunction("slice", [anyValue, numericValue, numericValue])(
        list,
        start_index,
        end_index
      )
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/sort.html sort} takes a list of strings and returns a new list with those strings sorted lexicographically.
   * @param {Array} list
   */
  static sort(list: string[]) {
    return asList(terraformFunction("sort", [listOf(anyValue)])(list));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/sum.html sum} takes a list or set of numbers and returns the sum of those numbers.
   * @param {any} list
   */
  static sum(list: any) {
    return asAny(terraformFunction("sum", [anyValue])(list));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/transpose.html transpose} takes a map of lists of strings and swaps the keys and values to produce a new map of lists of strings.
   * @param {Object} values
   */
  static transpose(values: any) {
    return asAny(terraformFunction("transpose", [mapValue])(values));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/values.html values} takes a map and returns a list containing the values of the elements in that map.
   * @param {any} mapping
   */
  static values(mapping: any) {
    return asAny(terraformFunction("values", [anyValue])(mapping));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/zipmap.html zipmap} constructs a map from a list of keys and a corresponding list of values.
   * @param {Array} keys
   * @param {any} values
   */
  static zipmap(keys: string[], values: any) {
    return asAny(
      terraformFunction("zipmap", [listOf(anyValue), anyValue])(keys, values)
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/base64sha256.html base64sha256} computes the SHA256 hash of a given string and encodes it with Base64. This is not equivalent to `base64encode(sha256(&#34;test&#34;))` since `sha256()` returns hexadecimal representation.
   * @param {string} str
   */
  static base64sha256(str: string) {
    return asString(terraformFunction("base64sha256", [stringValue])(str));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/base64sha512.html base64sha512} computes the SHA512 hash of a given string and encodes it with Base64. This is not equivalent to `base64encode(sha512(&#34;test&#34;))` since `sha512()` returns hexadecimal representation.
   * @param {string} str
   */
  static base64sha512(str: string) {
    return asString(terraformFunction("base64sha512", [stringValue])(str));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/bcrypt.html bcrypt} computes a hash of the given string using the Blowfish cipher, returning a string in [the _Modular Crypt Format_](https://passlib.readthedocs.io/en/stable/modular_crypt_format.html) usually expected in the shadow password file on many Unix systems.
   * @param {string} str
   * @param {Array} cost
   */
  static bcrypt(str: string, cost: number[]) {
    return asString(
      terraformFunction("bcrypt", [stringValue, listOf(numericValue)])(
        str,
        cost
      )
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/filebase64sha256.html filebase64sha256} is a variant of `base64sha256` that hashes the contents of a given file rather than a literal string.
   * @param {string} path
   */
  static filebase64sha256(path: string) {
    return asString(terraformFunction("filebase64sha256", [stringValue])(path));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/filebase64sha512.html filebase64sha512} is a variant of `base64sha512` that hashes the contents of a given file rather than a literal string.
   * @param {string} path
   */
  static filebase64sha512(path: string) {
    return asString(terraformFunction("filebase64sha512", [stringValue])(path));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/filemd5.html filemd5} is a variant of `md5` that hashes the contents of a given file rather than a literal string.
   * @param {string} path
   */
  static filemd5(path: string) {
    return asString(terraformFunction("filemd5", [stringValue])(path));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/filesha1.html filesha1} is a variant of `sha1` that hashes the contents of a given file rather than a literal string.
   * @param {string} path
   */
  static filesha1(path: string) {
    return asString(terraformFunction("filesha1", [stringValue])(path));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/filesha256.html filesha256} is a variant of `sha256` that hashes the contents of a given file rather than a literal string.
   * @param {string} path
   */
  static filesha256(path: string) {
    return asString(terraformFunction("filesha256", [stringValue])(path));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/filesha512.html filesha512} is a variant of `sha512` that hashes the contents of a given file rather than a literal string.
   * @param {string} path
   */
  static filesha512(path: string) {
    return asString(terraformFunction("filesha512", [stringValue])(path));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/md5.html md5} computes the MD5 hash of a given string and encodes it with hexadecimal digits.
   * @param {string} str
   */
  static md5(str: string) {
    return asString(terraformFunction("md5", [stringValue])(str));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/rsadecrypt.html rsadecrypt} decrypts an RSA-encrypted ciphertext, returning the corresponding cleartext.
   * @param {string} ciphertext
   * @param {string} privatekey
   */
  static rsadecrypt(ciphertext: string, privatekey: string) {
    return asString(
      terraformFunction("rsadecrypt", [stringValue, stringValue])(
        ciphertext,
        privatekey
      )
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/sha1.html sha1} computes the SHA1 hash of a given string and encodes it with hexadecimal digits.
   * @param {string} str
   */
  static sha1(str: string) {
    return asString(terraformFunction("sha1", [stringValue])(str));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/sha256.html sha256} computes the SHA256 hash of a given string and encodes it with hexadecimal digits.
   * @param {string} str
   */
  static sha256(str: string) {
    return asString(terraformFunction("sha256", [stringValue])(str));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/sha512.html sha512} computes the SHA512 hash of a given string and encodes it with hexadecimal digits.
   * @param {string} str
   */
  static sha512(str: string) {
    return asString(terraformFunction("sha512", [stringValue])(str));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/uuid.html uuid} generates a unique identifier string.
  
  */
  static uuid() {
    return asString(terraformFunction("uuid", [])());
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/uuidv5.html uuidv5} generates a _name-based_ UUID, as described in [RFC 4122 section 4.3](https://tools.ietf.org/html/rfc4122#section-4.3), also known as a &#34;version 5&#34; UUID.
   * @param {string} namespace
   * @param {string} name
   */
  static uuidv5(namespace: string, name: string) {
    return asString(
      terraformFunction("uuidv5", [stringValue, stringValue])(namespace, name)
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/formatdate.html formatdate} converts a timestamp into a different time format.
   * @param {string} format
   * @param {string} time
   */
  static formatdate(format: string, time: string) {
    return asString(
      terraformFunction("formatdate", [stringValue, stringValue])(format, time)
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/timeadd.html timeadd} adds a duration to a timestamp, returning a new timestamp.
   * @param {string} timestamp
   * @param {string} duration
   */
  static timeadd(timestamp: string, duration: string) {
    return asString(
      terraformFunction("timeadd", [stringValue, stringValue])(
        timestamp,
        duration
      )
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/timestamp.html timestamp} returns a UTC timestamp string in [RFC 3339](https://tools.ietf.org/html/rfc3339) format.
  
  */
  static timestamp() {
    return asString(terraformFunction("timestamp", [])());
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/base64decode.html base64decode} takes a string containing a Base64 character sequence and returns the original string.
   * @param {string} str
   */
  static base64decode(str: string) {
    return asString(terraformFunction("base64decode", [stringValue])(str));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/base64encode.html base64encode} applies Base64 encoding to a string.
   * @param {string} str
   */
  static base64encode(str: string) {
    return asString(terraformFunction("base64encode", [stringValue])(str));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/base64gzip.html base64gzip} compresses a string with gzip and then encodes the result in Base64 encoding.
   * @param {string} str
   */
  static base64gzip(str: string) {
    return asString(terraformFunction("base64gzip", [stringValue])(str));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/csvdecode.html csvdecode} decodes a string containing CSV-formatted data and produces a list of maps representing that data.
   * @param {string} str
   */
  static csvdecode(str: string) {
    return asAny(terraformFunction("csvdecode", [stringValue])(str));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/jsondecode.html jsondecode} interprets a given string as JSON, returning a representation of the result of decoding that string.
   * @param {string} str
   */
  static jsondecode(str: string) {
    return asAny(terraformFunction("jsondecode", [stringValue])(str));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/jsonencode.html jsonencode} encodes a given value to a string using JSON syntax.
   * @param {any} val
   */
  static jsonencode(val: any) {
    return asString(terraformFunction("jsonencode", [anyValue])(val));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/textdecodebase64.html textdecodebase64} function decodes a string that was previously Base64-encoded, and then interprets the result as characters in a specified character encoding.
   * @param {string} source
   * @param {string} encoding
   */
  static textdecodebase64(source: string, encoding: string) {
    return asString(
      terraformFunction("textdecodebase64", [stringValue, stringValue])(
        source,
        encoding
      )
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/textencodebase64.html textencodebase64} encodes the unicode characters in a given string using a specified character encoding, returning the result base64 encoded because Terraform language strings are always sequences of unicode characters.
   * @param {string} string
   * @param {string} encoding
   */
  static textencodebase64(string: string, encoding: string) {
    return asString(
      terraformFunction("textencodebase64", [stringValue, stringValue])(
        string,
        encoding
      )
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/urlencode.html urlencode} applies URL encoding to a given string.
   * @param {string} str
   */
  static urlencode(str: string) {
    return asString(terraformFunction("urlencode", [stringValue])(str));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/yamldecode.html yamldecode} parses a string as a subset of YAML, and produces a representation of its value.
   * @param {string} src
   */
  static yamldecode(src: string) {
    return asAny(terraformFunction("yamldecode", [stringValue])(src));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/yamlencode.html yamlencode} encodes a given value to a string using [YAML 1.2](https://yaml.org/spec/1.2/spec.html) block syntax.
   * @param {any} value
   */
  static yamlencode(value: any) {
    return asString(terraformFunction("yamlencode", [anyValue])(value));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/abspath.html abspath} takes a string containing a filesystem path and converts it to an absolute path. That is, if the path is not absolute, it will be joined with the current working directory.
   * @param {string} path
   */
  static abspath(path: string) {
    return asString(terraformFunction("abspath", [stringValue])(path));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/dirname.html dirname} takes a string containing a filesystem path and removes the last portion from it.
   * @param {string} path
   */
  static dirname(path: string) {
    return asString(terraformFunction("dirname", [stringValue])(path));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/pathexpand.html pathexpand} takes a filesystem path that might begin with a `~` segment, and if so it replaces that segment with the current user&#39;s home directory path.
   * @param {string} path
   */
  static pathexpand(path: string) {
    return asString(terraformFunction("pathexpand", [stringValue])(path));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/basename.html basename} takes a string containing a filesystem path and removes all except the last portion from it.
   * @param {string} path
   */
  static basename(path: string) {
    return asString(terraformFunction("basename", [stringValue])(path));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/file.html file} reads the contents of a file at the given path and returns them as a string.
   * @param {string} path
   */
  static file(path: string) {
    return asString(terraformFunction("file", [stringValue])(path));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/fileexists.html fileexists} determines whether a file exists at a given path.
   * @param {string} path
   */
  static fileexists(path: string) {
    return asBoolean(terraformFunction("fileexists", [stringValue])(path));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/fileset.html fileset} enumerates a set of regular file names given a path and pattern. The path is automatically removed from the resulting set of file names and any result still containing path separators always returns forward slash (`/`) as the path separator for cross-system compatibility.
   * @param {string} path
   * @param {string} pattern
   */
  static fileset(path: string, pattern: string) {
    return asList(
      terraformFunction("fileset", [stringValue, stringValue])(path, pattern)
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/filebase64.html filebase64} reads the contents of a file at the given path and returns them as a base64-encoded string.
   * @param {string} path
   */
  static filebase64(path: string) {
    return asString(terraformFunction("filebase64", [stringValue])(path));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/templatefile.html templatefile} reads the file at the given path and renders its content as a template using a supplied set of template variables.
   * @param {string} path
   * @param {any} vars
   */
  static templatefile(path: string, vars: any) {
    return asAny(
      terraformFunction("templatefile", [stringValue, anyValue])(path, vars)
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/cidrhost.html cidrhost} calculates a full host IP address for a given host number within a given IP network address prefix.
   * @param {string} prefix
   * @param {number} hostnum
   */
  static cidrhost(prefix: string, hostnum: number) {
    return asString(
      terraformFunction("cidrhost", [stringValue, numericValue])(
        prefix,
        hostnum
      )
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/cidrnetmask.html cidrnetmask} converts an IPv4 address prefix given in CIDR notation into a subnet mask address.
   * @param {string} prefix
   */
  static cidrnetmask(prefix: string) {
    return asString(terraformFunction("cidrnetmask", [stringValue])(prefix));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/cidrsubnet.html cidrsubnet} calculates a subnet address within given IP network address prefix.
   * @param {string} prefix
   * @param {number} newbits
   * @param {number} netnum
   */
  static cidrsubnet(prefix: string, newbits: number, netnum: number) {
    return asString(
      terraformFunction("cidrsubnet", [
        stringValue,
        numericValue,
        numericValue,
      ])(prefix, newbits, netnum)
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/cidrsubnets.html cidrsubnets} calculates a sequence of consecutive IP address ranges within a particular CIDR prefix.
   * @param {string} prefix
   * @param {Array} newbits
   */
  static cidrsubnets(prefix: string, newbits: number[]) {
    return asList(
      terraformFunction("cidrsubnets", [stringValue, listOf(numericValue)])(
        prefix,
        newbits
      )
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/abs.html abs} returns the absolute value of the given number. In other words, if the number is zero or positive then it is returned as-is, but if it is negative then it is multiplied by -1 to make it positive before returning it.
   * @param {number} num
   */
  static abs(num: number) {
    return asNumber(terraformFunction("abs", [numericValue])(num));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/ceil.html ceil} returns the closest whole number that is greater than or equal to the given value, which may be a fraction.
   * @param {number} num
   */
  static ceil(num: number) {
    return asNumber(terraformFunction("ceil", [numericValue])(num));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/floor.html floor} returns the closest whole number that is less than or equal to the given value, which may be a fraction.
   * @param {number} num
   */
  static floor(num: number) {
    return asNumber(terraformFunction("floor", [numericValue])(num));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/log.html log} returns the logarithm of a given number in a given base.
   * @param {number} num
   * @param {number} base
   */
  static log(num: number, base: number) {
    return asNumber(
      terraformFunction("log", [numericValue, numericValue])(num, base)
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/max.html max} takes one or more numbers and returns the greatest number from the set.
   * @param {Array} numbers
   */
  static max(numbers: number[]) {
    return asNumber(terraformFunction("max", [listOf(numericValue)])(numbers));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/min.html min} takes one or more numbers and returns the smallest number from the set.
   * @param {Array} numbers
   */
  static min(numbers: number[]) {
    return asNumber(terraformFunction("min", [listOf(numericValue)])(numbers));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/pow.html pow} calculates an exponent, by raising its first argument to the power of the second argument.
   * @param {number} num
   * @param {number} power
   */
  static pow(num: number, power: number) {
    return asNumber(
      terraformFunction("pow", [numericValue, numericValue])(num, power)
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/signum.html signum} determines the sign of a number, returning a number between -1 and 1 to represent the sign.
   * @param {number} num
   */
  static signum(num: number) {
    return asNumber(terraformFunction("signum", [numericValue])(num));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/chomp.html chomp} removes newline characters at the end of a string.
   * @param {string} str
   */
  static chomp(str: string) {
    return asString(terraformFunction("chomp", [stringValue])(str));
  }
  /**
   * The {@link https://www.terraform.io/docs/language/functions/format.html format} function produces a string by formatting a number of other values according to a specification string. It is similar to the `printf` function in C, and other similar functions in other programming languages.
   * @param {string} format
   * @param {Array} args
   */
  static format(format: string, args: any[]) {
    return asAny(
      terraformFunction("format", [stringValue, listOf(anyValue)])(format, args)
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/formatlist.html formatlist} produces a list of strings by formatting a number of other values according to a specification string.
   * @param {string} format
   * @param {Array} args
   */
  static formatlist(format: string, args: any[]) {
    return asAny(
      terraformFunction("formatlist", [stringValue, listOf(anyValue)])(
        format,
        args
      )
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/indent.html indent} adds a given number of spaces to the beginnings of all but the first line in a given multi-line string.
   * @param {number} spaces
   * @param {string} str
   */
  static indent(spaces: number, str: string) {
    return asString(
      terraformFunction("indent", [numericValue, stringValue])(spaces, str)
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/join.html join} produces a string by concatenating together all elements of a given list of strings with the given delimiter.
   * @param {string} separator
   * @param {Array} lists
   */
  static join(separator: string, lists: string[][]) {
    return asString(
      terraformFunction("join", [stringValue, listOf(listOf(anyValue))])(
        separator,
        lists
      )
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/lower.html lower} converts all cased letters in the given string to lowercase.
   * @param {string} str
   */
  static lower(str: string) {
    return asString(terraformFunction("lower", [stringValue])(str));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/regexall.html regexall} applies a [regular expression](https://en.wikipedia.org/wiki/Regular_expression) to a string and returns a list of all matches.
   * @param {string} pattern
   * @param {string} string
   */
  static regexall(pattern: string, string: string) {
    return asList(
      terraformFunction("regexall", [stringValue, stringValue])(pattern, string)
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/regex.html regex} applies a [regular expression](https://en.wikipedia.org/wiki/Regular_expression) to a string and returns the matching substrings.
   * @param {string} pattern
   * @param {string} string
   */
  static regex(pattern: string, string: string) {
    return asAny(
      terraformFunction("regex", [stringValue, stringValue])(pattern, string)
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/replace.html replace} searches a given string for another given substring, and replaces each occurrence with a given replacement string.
   * @param {string} str
   * @param {string} substr
   * @param {string} replace
   */
  static replace(str: string, substr: string, replace: string) {
    return asString(
      terraformFunction("replace", [stringValue, stringValue, stringValue])(
        str,
        substr,
        replace
      )
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/split.html split} produces a list by dividing a given string at all occurrences of a given separator.
   * @param {string} separator
   * @param {string} str
   */
  static split(separator: string, str: string) {
    return asList(
      terraformFunction("split", [stringValue, stringValue])(separator, str)
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/strrev.html strrev} reverses the characters in a string. Note that the characters are treated as _Unicode characters_ (in technical terms, Unicode [grapheme cluster boundaries](https://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries) are respected).
   * @param {string} str
   */
  static strrev(str: string) {
    return asString(terraformFunction("strrev", [stringValue])(str));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/substr.html substr} extracts a substring from a given string by offset and (maximum) length.
   * @param {string} str
   * @param {number} offset
   * @param {number} length
   */
  static substr(str: string, offset: number, length: number) {
    return asString(
      terraformFunction("substr", [stringValue, numericValue, numericValue])(
        str,
        offset,
        length
      )
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/title.html title} converts the first letter of each word in the given string to uppercase.
   * @param {string} str
   */
  static title(str: string) {
    return asString(terraformFunction("title", [stringValue])(str));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/trim.html trim} removes the specified set of characters from the start and end of the given string.
   * @param {string} str
   * @param {string} cutset
   */
  static trim(str: string, cutset: string) {
    return asString(
      terraformFunction("trim", [stringValue, stringValue])(str, cutset)
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/trimprefix.html trimprefix} removes the specified prefix from the start of the given string. If the string does not start with the prefix, the string is returned unchanged.
   * @param {string} str
   * @param {string} prefix
   */
  static trimprefix(str: string, prefix: string) {
    return asString(
      terraformFunction("trimprefix", [stringValue, stringValue])(str, prefix)
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/trimsuffix.html trimsuffix} removes the specified suffix from the end of the given string.
   * @param {string} str
   * @param {string} suffix
   */
  static trimsuffix(str: string, suffix: string) {
    return asString(
      terraformFunction("trimsuffix", [stringValue, stringValue])(str, suffix)
    );
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/trimspace.html trimspace} removes any space characters from the start and end of the given string.
   * @param {string} str
   */
  static trimspace(str: string) {
    return asString(terraformFunction("trimspace", [stringValue])(str));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/upper.html upper} converts all cased letters in the given string to uppercase.
   * @param {string} str
   */
  static upper(str: string) {
    return asString(terraformFunction("upper", [stringValue])(str));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/can.html can} evaluates the given expression and returns a boolean value indicating whether the expression produced a result without any errors.
   * @param {any} expression
   */
  static can(expression: any) {
    return asBoolean(terraformFunction("can", [anyValue])(expression));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/nonsensitive.html nonsensitive} takes a sensitive value and returns a copy of that value with the sensitive marking removed, thereby exposing the sensitive value.
   * @param {any} value
   */
  static nonsensitive(value: any) {
    return asAny(terraformFunction("nonsensitive", [anyValue])(value));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/sensitive.html sensitive} takes any value and returns a copy of it marked so that Terraform will treat it as sensitive, with the same meaning and behavior as for [sensitive input variables](/language/values/variables#suppressing-values-in-cli-output).
   * @param {any} value
   */
  static sensitive(value: any) {
    return asAny(terraformFunction("sensitive", [anyValue])(value));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/tobool.html tobool} converts its argument to a boolean value.
   * @param {any} v
   */
  static tobool(v: any) {
    return asBoolean(terraformFunction("tobool", [anyValue])(v));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/tolist.html tolist} converts its argument to a list value.
   * @param {any} v
   */
  static tolist(v: any) {
    return asList(terraformFunction("tolist", [anyValue])(v));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/tomap.html tomap} converts its argument to a map value.
   * @param {any} v
   */
  static tomap(v: any) {
    return asAny(terraformFunction("tomap", [anyValue])(v));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/tonumber.html tonumber} converts its argument to a number value.
   * @param {any} v
   */
  static tonumber(v: any) {
    return asNumber(terraformFunction("tonumber", [anyValue])(v));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/toset.html toset} converts its argument to a set value.
   * @param {any} v
   */
  static toset(v: any) {
    return asList(terraformFunction("toset", [anyValue])(v));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/tostring.html tostring} converts its argument to a string value.
   * @param {any} v
   */
  static tostring(v: any) {
    return asString(terraformFunction("tostring", [anyValue])(v));
  }
  /**
   * {@link https://www.terraform.io/docs/language/functions/try.html try} evaluates all of its argument expressions in turn and returns the result of the first one that does not produce any errors.
   * @param {Array} expressions
   */
  static try(expressions: any[]) {
    return asAny(terraformFunction("try", [listOf(anyValue)])(expressions));
  }
}
