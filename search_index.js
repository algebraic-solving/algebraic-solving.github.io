var documenterSearchIndex = {"docs":
[{"location":"groebner-bases/","page":"Gröbner bases","title":"Gröbner bases","text":"CurrentModule = AlgebraicSolving\nDocTestSetup = quote\n  using AlgebraicSolving\nend","category":"page"},{"location":"groebner-bases/","page":"Gröbner bases","title":"Gröbner bases","text":"using AlgebraicSolving","category":"page"},{"location":"groebner-bases/","page":"Gröbner bases","title":"Gröbner bases","text":"Pages = [\"groebner-bases.md\"]","category":"page"},{"location":"groebner-bases/#Gröbner-bases","page":"Gröbner bases","title":"Gröbner bases","text":"","category":"section"},{"location":"groebner-bases/#Introduction","page":"Gröbner bases","title":"Introduction","text":"","category":"section"},{"location":"groebner-bases/","page":"Gröbner bases","title":"Gröbner bases","text":"AlgebraicSolving allows to compute Gröbner bases for input generators over finite fields of characteristic smaller 2^31 w.r.t. the degree reverse lexicographical monomial order.","category":"page"},{"location":"groebner-bases/","page":"Gröbner bases","title":"Gröbner bases","text":"At the moment different variants of Faugère's F4 Algorithm are implemented as well as a signature based algorithm to compute Gröbner bases.","category":"page"},{"location":"groebner-bases/#Functionality","page":"Gröbner bases","title":"Functionality","text":"","category":"section"},{"location":"groebner-bases/","page":"Gröbner bases","title":"Gröbner bases","text":"    groebner_basis(\n        I::Ideal{T} where T <: MPolyRingElem;\n        initial_hts::Int=17,\n        nr_thrds::Int=1,\n        max_nr_pairs::Int=0,\n        la_option::Int=2,\n        eliminate::Int=0,\n        complete_reduction::Bool=true,\n        info_level::Int=0\n        )","category":"page"},{"location":"groebner-bases/#AlgebraicSolving.groebner_basis-Tuple{Ideal}","page":"Gröbner bases","title":"AlgebraicSolving.groebner_basis","text":"groebner_basis(I::Ideal{T} where T <: MPolyRingElem, <keyword arguments>)\n\nCompute a Groebner basis of the ideal I w.r.t. to the degree reverse lexicographical monomial ordering using Faugère's F4 algorithm. At the moment the underlying algorithm is based on variants of Faugère's F4 Algorithm.\n\nNote: At the moment only ground fields of characteristic p, p prime, p < 2^{31} are supported.\n\nArguments\n\nI::Ideal{T} where T <: MPolyRingElem: input generators.\ninitial_hts::Int=17: initial hash table size log_2.\nnr_thrds::Int=1: number of threads for parallel linear algebra.\nmax_nr_pairs::Int=0: maximal number of pairs per matrix, only bounded by minimal degree if 0.\nla_option::Int=2: linear algebra option: exact sparse-dense (1), exact sparse (2, default), probabilistic sparse-dense (42), probabilistic sparse(44).\neliminate::Int=0: size of first block of variables to be eliminated.\ncomplete_reduction::Bool=true: compute a reduced Gröbner basis for I\ninfo_level::Int=0: info level printout: off (0, default), summary (1), detailed (2).\n\nExamples\n\njulia> using AlgebraicSolving\n\njulia> R, (x,y,z) = polynomial_ring(GF(101),[\"x\",\"y\",\"z\"], ordering=:degrevlex)\n(Multivariate polynomial ring in 3 variables over GF(101), fpMPolyRingElem[x, y, z])\n\njulia> I = Ideal([x+2*y+2*z-1, x^2+2*y^2+2*z^2-x, 2*x*y+2*y*z-y])\nfpMPolyRingElem[x + 2*y + 2*z + 100, x^2 + 2*y^2 + 2*z^2 + 100*x, 2*x*y + 2*y*z + 100*y]\n\njulia> groebner_basis(I)\n4-element Vector{fpMPolyRingElem}:\n x + 2*y + 2*z + 100\n y*z + 82*z^2 + 10*y + 40*z\n y^2 + 60*z^2 + 20*y + 81*z\n z^3 + 28*z^2 + 64*y + 13*z\n\njulia> groebner_basis(I, eliminate=2)\n1-element Vector{fpMPolyRingElem}:\n z^4 + 38*z^3 + 95*z^2 + 95*z\n\n\n\n\n\n","category":"method"},{"location":"groebner-bases/","page":"Gröbner bases","title":"Gröbner bases","text":"The engine supports the elimination of one block of variables considering the product monomial ordering of two blocks, both ordered w.r.t. the degree reverse lexicographical order. One can either directly add the number of variables of the first block via the eliminate parameter in the groebner_basis call. We have also implemented an alias for this call:","category":"page"},{"location":"groebner-bases/","page":"Gröbner bases","title":"Gröbner bases","text":"    eliminate(\n        I::Ideal{T} where T <: MPolyRingElem,\n        eliminate::Int;\n        initial_hts::Int=17,\n        nr_thrds::Int=1,\n        max_nr_pairs::Int=0,\n        la_option::Int=2,\n        complete_reduction::Bool=true,\n        info_level::Int=0\n        )","category":"page"},{"location":"groebner-bases/#AlgebraicSolving.eliminate-Tuple{Ideal, Int64}","page":"Gröbner bases","title":"AlgebraicSolving.eliminate","text":"eliminate(I::Ideal{T} where T <: MPolyRingElem, eliminate::Int,  <keyword arguments>)\n\nCompute a Groebner basis of the ideal I w.r.t. to the product monomial ordering defined by two blocks w.r.t. the degree reverse lexicographical monomial ordering using Faugère's F4 algorithm. Hereby the first block includes the first eliminate variables.\n\nAt the moment the underlying algorithm is based on variants of Faugère's F4 Algorithm.\n\nNote: At the moment only ground fields of characteristic p, p prime, p < 2^{31} are supported.\n\nArguments\n\nI::Ideal{T} where T <: MPolyRingElem: input generators.\ninitial_hts::Int=17: initial hash table size log_2.\nnr_thrds::Int=1: number of threads for parallel linear algebra.\nmax_nr_pairs::Int=0: maximal number of pairs per matrix, only bounded by minimal degree if 0.\nla_option::Int=2: linear algebra option: exact sparse-dense (1), exact sparse (2, default), probabilistic sparse-dense (42), probabilistic sparse(44).\ncomplete_reduction::Bool=true: compute a reduced Gröbner basis for I\ninfo_level::Int=0: info level printout: off (0, default), summary (1), detailed (2).\n\nExamples\n\njulia> using AlgebraicSolving\n\njulia> R, (x,y,z) = polynomial_ring(GF(101),[\"x\",\"y\",\"z\"], ordering=:degrevlex)\n(Multivariate polynomial ring in 3 variables over GF(101), fpMPolyRingElem[x, y, z])\n\njulia> I = Ideal([x+2*y+2*z-1, x^2+2*y^2+2*z^2-x, 2*x*y+2*y*z-y])\nfpMPolyRingElem[x + 2*y + 2*z + 100, x^2 + 2*y^2 + 2*z^2 + 100*x, 2*x*y + 2*y*z + 100*y]\n\njulia> eliminate(I, 2)\n1-element Vector{fpMPolyRingElem}:\n z^4 + 38*z^3 + 95*z^2 + 95*z\n\n\n\n\n\n","category":"method"},{"location":"groebner-bases/","page":"Gröbner bases","title":"Gröbner bases","text":"To compute signature Gröbner bases use","category":"page"},{"location":"groebner-bases/","page":"Gröbner bases","title":"Gröbner bases","text":"    sig_groebner_basis(sys::Vector{T}; info_level::Int = 0, degbound::Int = 0) where {T <: MPolyRingElem}","category":"page"},{"location":"groebner-bases/#AlgebraicSolving.sig_groebner_basis-Union{Tuple{Vector{T}}, Tuple{T}} where T<:MPolyRingElem","page":"Gröbner bases","title":"AlgebraicSolving.sig_groebner_basis","text":"sig_groebner_basis(sys::Vector{T}; info_level::Int = 0, degbound::Int = 0) where {T <: MPolyRingElem}\n\nCompute a Signature Gröbner basis of the sequence sys w.r.t. to the degree reverse lexicographical monomial ordering and the degree position-over-term ordering induced by sys. The output is a vector of Tuple{Tuple{Int64, T}, T} where the first element indicates the signature and the second the underlying polynomial.\n\nNote: At the moment only ground fields of characteristic p, p prime, p < 2^{31} are supported. Note: The input generators must be homogeneous. Note: The algorithms behaviour may depend heavily on how the elements in sys are sorted.\n\nArguments\n\nsys::Vector{T} where T <: MpolyElem: input generators.\ninfo_level::Int=0: info level printout: off (0, default), computational details (1)\ndegbound::Int=0: degree bound for Gröbner basis computation, compute a full Gröbner basis if 0 (default) or only up to degree d.\n\nExample\n\njulia> using AlgebraicSolving\n\njulia> R, vars = polynomial_ring(GF(17), [\"x$i\" for i in 1:4])\n(Multivariate polynomial ring in 4 variables over GF(17), fpMPolyRingElem[x1, x2, x3, x4])\n\njulia> F = AlgebraicSolving.cyclic(R)\nfpMPolyRingElem[x1 + x2 + x3 + x4, x1*x2 + x1*x4 + x2*x3 + x3*x4, x1*x2*x3 + x1*x2*x4 + x1*x3*x4 + x2*x3*x4, x1*x2*x3*x4 + 16]\n\njulia> Fhom = AlgebraicSolving._homogenize(F.gens)\n4-element Vector{fpMPolyRingElem}:\n x1 + x2 + x3 + x4\n x1*x2 + x2*x3 + x1*x4 + x3*x4\n x1*x2*x3 + x1*x2*x4 + x1*x3*x4 + x2*x3*x4\n x1*x2*x3*x4 + 16*x5^4\n\njulia> sig_groebner_basis(Fhom)\n7-element Vector{Tuple{Tuple{Int64, fpMPolyRingElem}, fpMPolyRingElem}}:\n ((1, 1), x1 + x2 + x3 + x4)\n ((2, 1), x2^2 + 2*x2*x4 + x4^2)\n ((3, 1), x2*x3^2 + x3^2*x4 + 16*x2*x4^2 + 16*x4^3)\n ((4, 1), x2*x3*x4^2 + x3^2*x4^2 + 16*x2*x4^3 + x3*x4^3 + 16*x4^4 + 16*x5^4)\n ((4, x3), x3^3*x4^2 + x3^2*x4^3 + 16*x3*x5^4 + 16*x4*x5^4)\n ((4, x2), x2*x4^4 + x4^5 + 16*x2*x5^4 + 16*x4*x5^4)\n ((4, x2*x3), x3^2*x4^4 + x2*x3*x5^4 + 16*x2*x4*x5^4 + x3*x4*x5^4 + 15*x4^2*x5^4)\n\n\n\n\n\n","category":"method"},{"location":"solvers/","page":"Algebraic Systems Solving","title":"Algebraic Systems Solving","text":"CurrentModule = AlgebraicSolving\nDocTestSetup = quote\n  using AlgebraicSolving\nend","category":"page"},{"location":"solvers/","page":"Algebraic Systems Solving","title":"Algebraic Systems Solving","text":"using AlgebraicSolving","category":"page"},{"location":"solvers/","page":"Algebraic Systems Solving","title":"Algebraic Systems Solving","text":"Pages = [\"solvers.md\"]","category":"page"},{"location":"solvers/#Algebraic-Systems-Solving","page":"Algebraic Systems Solving","title":"Algebraic Systems Solving","text":"","category":"section"},{"location":"solvers/#Introduction","page":"Algebraic Systems Solving","title":"Introduction","text":"","category":"section"},{"location":"solvers/","page":"Algebraic Systems Solving","title":"Algebraic Systems Solving","text":"AlgebraicSolving allows to solve systems for input generators over finite fields of characteristic smaller 2^31 and over the rationals.","category":"page"},{"location":"solvers/","page":"Algebraic Systems Solving","title":"Algebraic Systems Solving","text":"The underlying engine is provided by msolve.","category":"page"},{"location":"solvers/#Functionality","page":"Algebraic Systems Solving","title":"Functionality","text":"","category":"section"},{"location":"solvers/","page":"Algebraic Systems Solving","title":"Algebraic Systems Solving","text":"    rational_parametrization(\n        I::Ideal{T} where T <: MPolyRingElem;\n        initial_hts::Int=17,\n        nr_thrds::Int=1,\n        max_nr_pairs::Int=0,\n        la_option::Int=2,\n        info_level::Int=0,\n        precision::Int=32\n        )\n\n    real_solutions(\n        I::Ideal{T} where T <: MPolyRingElem;\n        initial_hts::Int=17,\n        nr_thrds::Int=1,\n        max_nr_pairs::Int=0,\n        la_option::Int=2,\n        info_level::Int=0,\n        precision::Int=32\n        )\n    rational_solutions(\n        I::Ideal{T} where T <: MPolyRingElem;\n        initial_hts::Int=17,\n        nr_thrds::Int=1,\n        max_nr_pairs::Int=0,\n        la_option::Int=2,\n        info_level::Int=0,\n        precision::Int=32\n        )","category":"page"},{"location":"solvers/#AlgebraicSolving.rational_parametrization-Tuple{Ideal}","page":"Algebraic Systems Solving","title":"AlgebraicSolving.rational_parametrization","text":"rational_parametrization(I::Ideal{T} where T <: MPolyRingElem, <keyword arguments>)\n\nGiven an ideal I with a finite solution set over the complex numbers, return the rational parametrization of the ideal with a given precision (default 32 bits).\n\nNote: At the moment only QQ is supported as ground field. If the dimension of the ideal is greater then zero an empty array is returned.\n\nArguments\n\nI::Ideal{T} where T <: MPolyRingElem: input generators.\ninitial_hts::Int=17: initial hash table size log_2.\nnr_thrds::Int=1: number of threads for parallel linear algebra.\nmax_nr_pairs::Int=0: maximal number of pairs per matrix, only bounded by minimal degree if 0.\nla_option::Int=2: linear algebra option: exact sparse-dense (1), exact sparse (2, default), probabilistic sparse-dense (42), probabilistic sparse(44).\ninfo_level::Int=0: info level printout: off (0, default), summary (1), detailed (2).\nprecision::Int=32: bit precision for the computed solutions.\n\nExamples\n\njulia> using AlgebraicSolving\n\njulia> R,(x1,x2,x3) = polynomial_ring(QQ, [\"x1\",\"x2\",\"x3\"])\n(Multivariate polynomial ring in 3 variables over QQ, QQMPolyRingElem[x1, x2, x3])\n\njulia> I = Ideal([x1+2*x2+2*x3-1, x1^2+2*x2^2+2*x3^2-x1, 2*x1*x2+2*x2*x3-x2])\nQQMPolyRingElem[x1 + 2*x2 + 2*x3 - 1, x1^2 - x1 + 2*x2^2 + 2*x3^2, 2*x1*x2 + 2*x2*x3 - x2]\n\njulia> rational_parametrization(I)\nAlgebraicSolving.RationalParametrization([:x1, :x2, :x3], ZZRingElem[], 84*x^4 - 40*x^3 + x^2 + x, 336*x^3 - 120*x^2 + 2*x + 1, AbstractAlgebra.PolyRingElem[184*x^3 - 80*x^2 + 4*x + 1, 36*x^3 - 18*x^2 + 2*x])\n\n\n\n\n\n","category":"method"},{"location":"solvers/#AlgebraicSolving.real_solutions-Tuple{Ideal}","page":"Algebraic Systems Solving","title":"AlgebraicSolving.real_solutions","text":"real_solutions(I::Ideal{T} where T <: MPolyRingElem, <keyword arguments>)\n\nGiven an ideal I with a finite solution set over the complex numbers, return the real roots of the ideal with a given precision (default 32 bits).\n\nNote: At the moment only QQ is supported as ground field. If the dimension of the ideal is greater than zero an empty array is returned.\n\nArguments\n\nI::Ideal{T} where T <: MPolyRingElem: input generators.\ninitial_hts::Int=17: initial hash table size log_2.\nnr_thrds::Int=1: number of threads for parallel linear algebra.\nmax_nr_pairs::Int=0: maximal number of pairs per matrix, only bounded by minimal degree if 0.\nla_option::Int=2: linear algebra option: exact sparse-dense (1), exact sparse (2, default), probabilistic sparse-dense (42), probabilistic sparse(44).\ninfo_level::Int=0: info level printout: off (0, default), summary (1), detailed (2).\nprecision::Int=32: bit precision for the computed solutions.\n\nExamples\n\njulia> using AlgebraicSolving\n\njulia> R,(x1,x2,x3) = polynomial_ring(QQ, [\"x1\",\"x2\",\"x3\"])\n(Multivariate polynomial ring in 3 variables over QQ, QQMPolyRingElem[x1, x2, x3])\n\njulia> I = Ideal([x1+2*x2+2*x3-1, x1^2+2*x2^2+2*x3^2-x1, 2*x1*x2+2*x2*x3-x2])\nQQMPolyRingElem[x1 + 2*x2 + 2*x3 - 1, x1^2 - x1 + 2*x2^2 + 2*x3^2, 2*x1*x2 + 2*x2*x3 - x2]\n\njulia> real_solutions(I)\n4-element Vector{Vector{QQFieldElem}}:\n [5416829397//8589934592, 2708414699//8589934592, -2844258330290649520990905062759917788583//21778071482940061661655974875633165533184]\n [1, 0, 0]\n [1945971683//8589934592, 972985841//8589934592, 744426424910260862653434112767010536665//2722258935367507707706996859454145691648]\n [2863311531//8589934592, 0, 3629678580490010276942662479272194255531//10889035741470030830827987437816582766592]\n\n\n\n\n\n","category":"method"},{"location":"solvers/#AlgebraicSolving.rational_solutions-Tuple{Ideal}","page":"Algebraic Systems Solving","title":"AlgebraicSolving.rational_solutions","text":"rational_solutions(I::Ideal{T} where T <: MPolyRingElem, <keyword arguments>)\n\nGiven an ideal I with a finite solution set over the complex numbers, return the rational roots of the ideal. \n\nArguments\n\nI::Ideal{T} where T <: MPolyRingElem: input generators.\ninitial_hts::Int=17: initial hash table size log_2.\nnr_thrds::Int=1: number of threads for parallel linear algebra.\nmax_nr_pairs::Int=0: maximal number of pairs per matrix, only bounded by minimal degree if 0.\nla_option::Int=2: linear algebra option: exact sparse-dense (1), exact sparse (2, default), probabilistic sparse-dense (42), probabilistic sparse(44).\ninfo_level::Int=0: info level printout: off (0, default), summary (1), detailed (2).\nprecision::Int=32: bit precision for the computed solutions.\n\nExamples\n\njulia> using AlgebraicSolving\n\njulia> R,(x1,x2,x3) = polynomial_ring(QQ, [\"x1\",\"x2\",\"x3\"])\n(Multivariate polynomial ring in 3 variables over QQ, QQMPolyRingElem[x1, x2, x3])\n\njulia> I = Ideal([x1+2*x2+2*x3-1, x1^2+2*x2^2+2*x3^2-x1, 2*x1*x2+2*x2*x3-x2])\nQQMPolyRingElem[x1 + 2*x2 + 2*x3 - 1, x1^2 - x1 + 2*x2^2 + 2*x3^2, 2*x1*x2 + 2*x2*x3 - x2]\n\njulia> rat_sols = rational_solutions(I)\n2-element Vector{Vector{QQFieldElem}}:\n [1, 0, 0]\n [1//3, 0, 1//3]\n\njulia> map(r->map(p->evaluate(p, r), I.gens), rat_sols)\n2-element Vector{Vector{QQFieldElem}}:\n [0, 0, 0]\n [0, 0, 0]\n\n\n\n\n\n","category":"method"},{"location":"katsura/","page":"Examples","title":"Examples","text":"CurrentModule = AlgebraicSolving\nDocTestSetup = quote\n  using AlgebraicSolving\nend","category":"page"},{"location":"katsura/","page":"Examples","title":"Examples","text":"using AlgebraicSolving","category":"page"},{"location":"katsura/","page":"Examples","title":"Examples","text":"Pages = [\"katsura.md\"]","category":"page"},{"location":"katsura/#Examples","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"katsura/","page":"Examples","title":"Examples","text":"Here we include some well-known example multivariate polynomial systems.","category":"page"},{"location":"katsura/#Katsura-n","page":"Examples","title":"Katsura-n","text":"","category":"section"},{"location":"katsura/","page":"Examples","title":"Examples","text":"These systems appeared in a problem of magnetism in physics. For a given n katsura(n) has 2^n solutions and is defined in a polynomial ring with n+1 variables. For a given polynomial ring R with n variables katsura(R) defines the corresponding system with 2^n-1 solutions.","category":"page"},{"location":"katsura/#Functionality","page":"Examples","title":"Functionality","text":"","category":"section"},{"location":"katsura/","page":"Examples","title":"Examples","text":"    katsura(n::Int)\n    katsura(R::MPolyRing)","category":"page"},{"location":"katsura/#AlgebraicSolving.katsura-Tuple{Int64}","page":"Examples","title":"AlgebraicSolving.katsura","text":"katsura(n::Int)\n\nGiven a natural number n returns the Katsura ideal generated by u_m - sum_l=n^n u_l-m u_l, 1 - sum_l = -n^n u_l where u_-i = u_i, and u_i = 0 for i  n and m in -n ldots n. Also note that indices have been shifted to start from 1.\n\nExample\n\njulia> using AlgebraicSolving\n\njulia> katsura(2)\nQQMPolyRingElem[x1 + 2*x2 + 2*x3 - 1, x1^2 + 2*x2^2 + 2*x3^2 - x1, 2*x1*x2 + 2*x2*x3 - x2]\n\n\n\n\n\n","category":"method"},{"location":"katsura/#AlgebraicSolving.katsura-Tuple{MPolyRing}","page":"Examples","title":"AlgebraicSolving.katsura","text":"katsura(R::MPolyRing)\n\nReturns the Katsura ideal in the given polynomial ring R.\n\nExample\n\njulia> using AlgebraicSolving\n\njulia> R, _ = QQ[\"x\", \"y\", \"z\"]\n(Multivariate polynomial ring in 3 variables over QQ, QQMPolyRingElem[x, y, z])\n\njulia> katsura(R)\nQQMPolyRingElem[x + 2*y + 2*z - 1, x^2 - x + 2*y^2 + 2*z^2, 2*x*y + 2*y*z - y]\n\n\n\n\n\n","category":"method"},{"location":"normal-forms/","page":"Normal forms","title":"Normal forms","text":"CurrentModule = AlgebraicSolving\nDocTestSetup = quote\n  using AlgebraicSolving\nend","category":"page"},{"location":"normal-forms/","page":"Normal forms","title":"Normal forms","text":"using AlgebraicSolving","category":"page"},{"location":"normal-forms/","page":"Normal forms","title":"Normal forms","text":"Pages = [\"normal-forms.md\"]","category":"page"},{"location":"normal-forms/#Normal-forms","page":"Normal forms","title":"Normal forms","text":"","category":"section"},{"location":"normal-forms/#Introduction","page":"Normal forms","title":"Introduction","text":"","category":"section"},{"location":"normal-forms/","page":"Normal forms","title":"Normal forms","text":"AlgebraicSolving allows to compute normal forms of a polynomial resp. a finite array of polynomials w.r.t. some given ideal over a finite field of characteristic smaller 2^31 w.r.t. the degree reverse lexicographical monomial order.","category":"page"},{"location":"normal-forms/","page":"Normal forms","title":"Normal forms","text":"Note: It therefore might first compute a Gröbner bases for the ideal.","category":"page"},{"location":"normal-forms/#Functionality","page":"Normal forms","title":"Functionality","text":"","category":"section"},{"location":"normal-forms/","page":"Normal forms","title":"Normal forms","text":"    normal_form(\n        f::T,\n        I::Ideal{T};\n        nr_thrds::Int=1,\n        info_level::Int=0\n        ) where T <: MPolyRingElem","category":"page"},{"location":"normal-forms/#AlgebraicSolving.normal_form-Union{Tuple{T}, Tuple{T, Ideal{T}}} where T<:MPolyRingElem","page":"Normal forms","title":"AlgebraicSolving.normal_form","text":"normal_form(\n    f::T,\n    I::Ideal{T};\n    nr_thrds::Int=1,\n    info_level::Int=0\n    ) where T <: MPolyRingElem\n\nCompute the normal forms of the elements of F w.r.t. a degree reverse lexicographical Gröbner basis of I.\n\nNote: If I has not already cached a degree reverse lexicographical Gröbner basis, then this one is first computed.\n\nArguments\n\nF::Vector{T} where T <: MPolyRingElem: elements to be reduced.\nI::Ideal{T} where T <: MPolyRingElem: ideal data to reduce with.\nnr_thrds::Int=1: number of threads for parallel linear algebra.\ninfo_level::Int=0: info level printout: off (0, default), summary (1), detailed (2).\n\nExamples\n\njulia> using AlgebraicSolving\n\njulia> R, (x,y) = polynomial_ring(GF(101),[\"x\",\"y\"])\n(Multivariate polynomial ring in 2 variables over GF(101), fpMPolyRingElem[x, y])\n\njulia> I = Ideal([y*x^3+12-y, x+y])\nfpMPolyRingElem[x^3*y + 100*y + 12, x + y]\n\njulia> f = 2*x^2+7*x*y\n2*x^2 + 7*x*y\n\njulia> normal_form(f, I)\n96*y^2\n\n\n\n\n\n","category":"method"},{"location":"normal-forms/","page":"Normal forms","title":"Normal forms","text":"    normal_form(\n        F::Vector{T},\n        I::Ideal{T};\n        nr_thrds::Int=1,\n        info_level::Int=0\n        ) where T <: MPolyRingElem","category":"page"},{"location":"normal-forms/#AlgebraicSolving.normal_form-Union{Tuple{T}, Tuple{Vector{T}, Ideal{T}}} where T<:MPolyRingElem","page":"Normal forms","title":"AlgebraicSolving.normal_form","text":"normal_form(\n    F::Vector{T},\n    I::Ideal{T};\n    nr_thrds::Int=1,\n    info_level::Int=0\n    ) where T <: MPolyRingElem\n\nCompute the normal forms of the elements of F w.r.t. a degree reverse lexicographical Gröbner basis of I.\n\nNote: If I has not already cached a degree reverse lexicographical Gröbner basis, then this one is first computed.\n\nArguments\n\nF::Vector{T} where T <: MPolyRingElem: elements to be reduced.\nI::Ideal{T} where T <: MPolyRingElem: ideal data to reduce with.\nnr_thrds::Int=1: number of threads for parallel linear algebra.\ninfo_level::Int=0: info level printout: off (0, default), summary (1), detailed (2).\n\nExamples\n\njulia> using AlgebraicSolving\n\njulia> R, (x,y) = polynomial_ring(GF(101),[\"x\",\"y\"])\n(Multivariate polynomial ring in 2 variables over GF(101), fpMPolyRingElem[x, y])\n\njulia> I = Ideal([y*x^3+12-y, x+y])\nfpMPolyRingElem[x^3*y + 100*y + 12, x + y]\n\njulia> F = [2*x^2+7*x*y, x+y]\n2-element Vector{fpMPolyRingElem}:\n 2*x^2 + 7*x*y\n x + y\n\njulia> normal_form(F,I)\n2-element Vector{fpMPolyRingElem}:\n 96*y^2\n 0\n\n\n\n\n\n","category":"method"},{"location":"#Getting-Started","page":"Getting Started","title":"Getting Started","text":"","category":"section"},{"location":"","page":"Getting Started","title":"Getting Started","text":"AlgebraicSolving is a computer algebra package for the Julia programming  language, maintained by Christian Eder and Mohab Safey El Din.","category":"page"},{"location":"","page":"Getting Started","title":"Getting Started","text":"https://github.com/algebraic-solving/AlgebraicSolving.jl (Source code)","category":"page"},{"location":"","page":"Getting Started","title":"Getting Started","text":"The features of AlgebraicSolving include algorithms for computing Gröbner bases over finite fields and for computing real solutions. The main workhorse of AlgebraicSolving is the msolve library .","category":"page"},{"location":"#Installation","page":"Getting Started","title":"Installation","text":"","category":"section"},{"location":"","page":"Getting Started","title":"Getting Started","text":"To use Nemo we require Julia 1.6 or higher. Please see https://julialang.org/downloads/ for instructions on how to obtain julia for your system.","category":"page"},{"location":"","page":"Getting Started","title":"Getting Started","text":"At the Julia prompt simply type","category":"page"},{"location":"","page":"Getting Started","title":"Getting Started","text":"julia> using Pkg; Pkg.add(\"AlgebraicSolving\")","category":"page"},{"location":"types/","page":"Data Types","title":"Data Types","text":"CurrentModule = AlgebraicSolving\nDocTestSetup = quote\n  using AlgebraicSolving\nend","category":"page"},{"location":"types/","page":"Data Types","title":"Data Types","text":"using AlgebraicSolving","category":"page"},{"location":"types/","page":"Data Types","title":"Data Types","text":"Pages = [\"types.md\"]","category":"page"},{"location":"types/#Data-Types","page":"Data Types","title":"Data Types","text":"","category":"section"},{"location":"types/#Introduction","page":"Data Types","title":"Introduction","text":"","category":"section"},{"location":"types/","page":"Data Types","title":"Data Types","text":"AlgebraicSolving handles ideals in multivariate polynomial rings over a prime  field of characteristic 0 or p where p is a prime number 2^31.","category":"page"},{"location":"types/#Polynomial-Rings","page":"Data Types","title":"Polynomial Rings","text":"","category":"section"},{"location":"types/","page":"Data Types","title":"Data Types","text":"We use Nemo's multivariate polynomial  ring structures:","category":"page"},{"location":"types/","page":"Data Types","title":"Data Types","text":"using AlgebraicSolving\nR, (x,y,z) = polynomial_ring(QQ, [\"x\", \"y\", \"z\"], ordering=:degrevlex)","category":"page"},{"location":"types/","page":"Data Types","title":"Data Types","text":"The above example defines a multivariate polynomial ring in three variables x,  y, and z over the rationals using the dgree reverse lexicographical ordering  for printing polynomials in the following. One can also define polynomial rings  over finite fields:","category":"page"},{"location":"types/","page":"Data Types","title":"Data Types","text":"using AlgebraicSolving\nR, (x,y,z) = polynomial_ring(GF(101), [\"x\", \"y\", \"z\"], ordering=:degrevlex)","category":"page"},{"location":"types/#Ideals","page":"Data Types","title":"Ideals","text":"","category":"section"},{"location":"types/","page":"Data Types","title":"Data Types","text":"Ideals can be constructed by giving an array of generators. Ideals cache varies  data structures connected to ideals in order to make computational algebra more  effective:","category":"page"},{"location":"types/","page":"Data Types","title":"Data Types","text":"using AlgebraicSolving\nR, (x,y,z) = polynomial_ring(QQ, [\"x\", \"y\", \"z\"], ordering=:degrevlex)\nI = Ideal([x+y+1, y*z^2-13*y^2])","category":"page"}]
}
