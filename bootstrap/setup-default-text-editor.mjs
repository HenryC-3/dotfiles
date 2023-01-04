// the file type list https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html
// [duti: A command-line tool to select default applications for document types and URL schemes on Mac OS X](https://github.com/moretension/duti)
const bundleId = "com.microsoft.VSCodeInsiders"
const fileTypes = [
    "public.json",
    "public.plain-text",
    "public.python-script",
    "public.shell-script",
    "public.source-code",
    "public.text",
    "public.unix-executable"
]


// for the file without file extension
await $`duti -s ${bundleId} public.data all`

fileTypes.forEach((fileType) => {
    $`duti -s ${bundleId} ${fileType} all`
})