import * as http from "node:http";
import * as fs from "node:fs";
import * as path from "node:path";
import * as dotenv from "dotenv";

dotenv.config();

// constants
const PORT = process.env.PORT || 3000;
const currentDirectory = import.meta.dirname
const publicDirectory = path.join(currentDirectory, "public");

// server creation
const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    // default to index.html if root is requested
    let filePath = req.url === "/" ? "index.html" : req.url;
    const fullPath = path.join(publicDirectory, filePath);

    // file extension - content type mapping
    const ext = path.extname(fullPath).toLowerCase();
    const contentTypeMap = {
        ".html" : "text/html",
        ".css" : "text/css",
        ".js" : "application/js",
        ".jpg" : "image/jpeg",
        ".jpeg" : "image/jpeg",
    };
    // no extension means text file
    const contentType = contentTypeMap[ext] || "text/plain"

    // try reading and serving the file
    fs.readFile(fullPath, (err, data) => {
        if (err) {
            if (err.code === "ENOENT") {
                // if the specified file doesn't exist
                res.writeHead(404, { "content-type" : "text/plain"});
                res.end("404 Not Found");
            } else {
                // other errors
                res.writeHead(500, { "content-type" : "text/plain"});
                res.end("500 Internal Server Error");
            }
        } else {
            // no errors
            res.writeHead(200, { "content-type" : contentType});
            res.end(data);
        }
    });
});

// start server on port
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})