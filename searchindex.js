Search.setIndex({"docnames": ["AugmentLagrange", "ConjugateGradient", "EvolutionAlgorithm", "ExtendedTopics", "LeastSquares", "LineSearch", "Projects", "Proximal", "QuadraticProgramming", "QuasiNewton", "Subgradient", "Syllabus", "TrustRegion", "intro"], "filenames": ["AugmentLagrange.md", "ConjugateGradient.md", "EvolutionAlgorithm.md", "ExtendedTopics.md", "LeastSquares.md", "LineSearch.ipynb", "Projects.md", "Proximal.md", "QuadraticProgramming.md", "QuasiNewton.md", "Subgradient.md", "Syllabus.md", "TrustRegion.md", "intro.md"], "titles": ["Augmented Lagrangian Methods (Week 8 - 9)", "Conjugate Gradient Methods (Week 3)", "Evolution Algorithms (Week 10)", "Extended Topics (Week 13)", "Least Squares Problems (Week 5)", "Line Search Methods (Week 1)", "Final Group Project Presentation (Week 14)", "Proximal Methods (Week 12)", "Quadratic Programming (Week 6 - 7)", "Quasi-Newton Methods (Week 4)", "Subgradient Methods (Week 11)", "Syllabus", "Trust Region Method (Week 2)", "Welcome to Math 5650/6650: Nonlinear Optimization"], "terms": {"each": 5, "iter": 5, "requir": 5, "alpha_k": 5, "direct": 5, "p_k": 5, "comput": 5, "updat": 5, "x_": 5, "k": 5, "x_k": 5, "onc": 5, "reduc": 5, "object": 5, "function": 5, "f": 5, "usual": 5, "should": 5, "compromis": 5, "between": 5, "reduct": 5, "cost": 5, "ideal": 5, "best": 5, "choic": 5, "so": [5, 13], "call": 5, "which": 5, "find": 5, "optim": [5, 11], "minim": 5, "follow": 5, "singl": 5, "variabl": 5, "phi": 5, "cdot": 5, "alpha": 5, "quad": 5, "0": 5, "import": 5, "numpi": 5, "np": 5, "matplotlib": 5, "pyplot": 5, "plt": 5, "from": [5, 13], "linalg": 5, "norm": 5, "scipi": 5, "minimize_scalar": 5, "descript": 5, "steepest": 5, "decent": 5, "paramet": 5, "objfunc": 5, "gradobjfunc": 5, "x0": 5, "start": 5, "point": 5, "tol": 5, "toler": 5, "stop": 5, "criteria": 5, "maxit": 5, "maximum": 5, "def": 5, "exact_steepest_decent_method": 5, "path": 5, "xk": 5, "pk": 5, "while": 5, "subproblem1d": 5, "return": 5, "re": 5, "x": 5, "append": 5, "arrai": 5, "convert": 5, "print": 5, "found": 5, "successfulli": 5, "nrm": 5, "format": 5, "els": 5, "unabl": 5, "locat": 5, "within": 5, "last": 5, "posit": 5, "In": 5, "gener": 5, "quit": 5, "expens": 5, "therefor": 5, "we": 5, "us": 5, "some": 5, "simpl": 5, "strategi": 5, "good": 5, "lead": 5, "inexact": 5, "The": [5, 11, 13], "most": 5, "popular": 5, "one": 5, "ar": [5, 11], "two": 5, "inequ": 5, "satisfi": 5, "suffici": 5, "decreas": 5, "also": [5, 11], "armijo": 5, "leq": 5, "c_1": 5, "nabla": 5, "f_k": 5, "t": 5, "curvatur": 5, "geq": 5, "c_2": 5, "thi": [11, 13], "cours": [11, 13], "involv": 11, "both": 11, "basic": [11, 13], "theori": 11, "program": [11, 13], "prerequisit": 11, "part": [11, 13], "linear": [11, 13], "differenti": 11, "equat": 11, "2650": 11, "topic": [11, 13], "algebra": 11, "2660": 11, "default": 11, "languag": 11, "class": [11, 13], "python": 11, "other": 11, "script": 11, "matlab": 11, "r": 11, "julia": 11, "accept": 11, "bi": 11, "weekli": 11, "homework": 11, "submit": 11, "canva": 11, "public": 11, "repositori": 11, "link": 11, "correct": 11, "perform": 11, "websit": 13, "host": 13, "materi": 13, "cover": 13, "knowledg": 13, "book": 13, "written": 13, "jorg": 13, "noced": 13, "stephen": 13, "wright": 13, "numer": 13, "2nd": 13, "edit": 13, "contain": 13, "mani": 13, "typo": 13, "cautiou": 13, "when": 13, "read": 13, "pleas": 13, "note": 13, "ch": 13, "13": 13, "14": 13, "syllabu": 13, "line": 13, "search": 13, "method": 13, "week": 13, "1": 13, "trust": 13, "region": 13, "2": 13, "conjug": 13, "gradient": 13, "3": 13, "quasi": 13, "newton": 13, "4": 13, "least": 13, "squar": 13, "problem": 13, "5": 13, "quadrat": 13, "6": 13, "7": 13, "augment": 13, "lagrangian": 13, "8": 13, "9": 13, "evolut": 13, "algorithm": 13, "10": 13, "subgradi": 13, "11": 13, "proxim": 13, "12": 13, "extend": 13, "final": 13, "group": 13, "project": 13, "present": 13}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"augment": 0, "lagrangian": 0, "method": [0, 1, 5, 7, 9, 10, 12], "week": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12], "8": 0, "9": 0, "exercis": [0, 1, 2, 5, 8, 9, 12], "conjug": 1, "gradient": [1, 5], "3": 1, "evolut": 2, "algorithm": 2, "10": 2, "classic": 2, "genet": 2, "differenti": 2, "simul": 2, "anneal": 2, "particl": 2, "swarm": 2, "extend": 3, "topic": [3, 5], "13": 3, "least": 4, "squar": 4, "problem": 4, "5": 4, "regular": 4, "line": 5, "search": 5, "1": 5, "step": 5, "length": 5, "wolf": 5, "condit": 5, "converg": 5, "newton": [5, 9], "s": 5, "quasi": [5, 9], "stochast": 5, "descent": 5, "select": 5, "exact": 5, "backtrack": 5, "more": 5, "momentum": 5, "nesterov": 5, "acceler": 5, "theori": 5, "program": [5, 8], "final": 6, "group": 6, "project": 6, "present": 6, "14": 6, "proxim": 7, "12": 7, "quadrat": 8, "6": 8, "7": 8, "4": 9, "subgradi": 10, "11": 10, "syllabu": 11, "grade": 11, "polici": 11, "tent": 11, "schedul": 11, "trust": 12, "region": 12, "2": 12, "welcom": 13, "math": 13, "5650": 13, "6650": 13, "nonlinear": 13, "optim": 13}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})