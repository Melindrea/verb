Now that {%= name %} is installed, add a `README.tmpl.md` to a `docs/` dir in your project with this content:

```markdown
{%= raw("example-readme") %}
```

Next, in the command line run:

```bash
verb
```

That wasn't so hard, was it? (It was? Tell us about it, we'd love to know. {%= include('report-bugs') %}).