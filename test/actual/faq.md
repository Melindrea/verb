## FAQ

* Verb's goal is to _simply work_ without custom programming, but you can fully extend Verb's core with plugins, add custom tags, or use a Verbfile for advanced configuration needs.
* **Why does Verb use the `{%= foo %}` syntax for templates?**: We do this to avoid collision with the more common, default syntax for Lo-Dash templates, `<%= foo %>`. Of course, nothing if foolproof, so if the default delimiters don't work for your needs you can customize them in the options.