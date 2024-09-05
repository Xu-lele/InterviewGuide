(window.webpackJsonp=window.webpackJsonp||[]).push([[400],{816:function(t,n,e){"use strict";e.r(n);var s=e(62),r=Object(s.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",{attrs:{id:"的平方根"}}),t._v(" "),e("h3",{attrs:{id:"_69-x-的平方根"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_69-x-的平方根"}},[t._v("#")]),t._v(" 69. x 的平方根")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://leetcode-cn.com/problems/sqrtx/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣原题链接（点我直达）"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("实现 int sqrt(int x) 函数。")]),t._v(" "),e("p",[t._v("计算并返回 x 的平方根，其中 x 是非负整数。")]),t._v(" "),e("p",[t._v("由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。")]),t._v(" "),e("h4",{attrs:{id:"相乘穷举-可能溢出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相乘穷举-可能溢出"}},[t._v("#")]),t._v(" 相乘穷举，可能溢出")]),t._v(" "),e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n    int mySqrt(int x) {\n\tif (x == 0) return 0;\n\tif (x <= 3) return 1;\n\tint i = 2;//输入2147395600时报错，（i*i）也是个int，\t\t\t\t//int，可保存不了这么大的数字，只好改为\t\t\t\t\t//long\n\tfor (; i < x / 2; ++i)\n\t{\n\t\tif ( (i * i <= x) && ((i + 1)* (i + 1) > x))\n\t\t\treturn i;\n\t}\n    return i;\n    }\n")])])]),e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    int mySqrt(int x) {\n\tif (x == 0) return 0;\n\tif (x <= 3) return 1;\n\tlong int i = 2;//改为long后通过\n\tfor (; i < x / 2; ++i)\n\t{\n\t\tif ( (i * i <= x) && ((i + 1)* (i + 1) > x))\n\t\t\treturn i;\n\t}\n    return i;\n    }\n")])])]),e("p",[t._v("执行用时 :64 ms, 在所有 C++ 提交中击败了5.00%的用户")]),t._v(" "),e("p",[t._v("内存消耗 :8.1 MB, 在所有 C++ 提交中击败了90.43%的用户")]),t._v(" "),e("h4",{attrs:{id:"二分法会更快一点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二分法会更快一点"}},[t._v("#")]),t._v(" 二分法会更快一点")]),t._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    int mySqrt(int x) {\n\tif (x == 0) return 0;\n\tif (x <= 3) return 1;\n\tint min = 0;\n\tint max = x;\n\twhile (max - min > 1)\n\t{\n\t\tint m = (max + min) / 2;\n\t\tif (x / m < m)//用x/m<m，而不是m*m<x可以防止溢出\n\t\t\tmax = m;\n\t\telse\n\t\t\tmin = m;\n\t}\n\treturn min;\n    }\n")])])]),e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    int mySqrt(int x) {\n        long mid = 0;\n        long left = 0;\n        long right = x;\n        while (left < right)\n        {\n            mid = (left + right + 1) / 2;\n            long sq = mid * mid; //或者这样也会更快一点\n            if (sq > x)\n            {\n                right = mid - 1;\n            }\n            else\n            {\n                left = mid;\n            }\n        }\n        \n        return (int)left;\n    }\n")])])]),e("p",{attrs:{id:"两数之和"}}),t._v(" "),e("h3",{attrs:{id:"_167-两数之和-ii-输入有序数组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_167-两数之和-ii-输入有序数组"}},[t._v("#")]),t._v(" "),e("strong",[t._v("167. 两数之和 II - 输入有序数组]")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣原题链接（点我直达）"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("给定一个已按照"),e("strong",[t._v("升序排列")]),t._v(" 的有序数组，找到两个数使得它们相加之和等于目标数。")]),t._v(" "),e("p",[t._v("函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。")]),t._v(" "),e("p",[t._v("说明:")]),t._v(" "),e("p",[t._v("返回的下标值（index1 和 index2）不是从零开始的。\n你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。\n示例:")]),t._v(" "),e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("输入: numbers = [2, 7, 11, 15], target = 9\n输出: [1,2]\n解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。\n\n\n")])])]),e("h5",{attrs:{id:"第一次"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一次"}},[t._v("#")]),t._v(" 第一次")]),t._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    vector<int> twoSum(vector<int>& numbers, int target) {\n   \tvector<int> vIndex;\n\tvIndex.reserve(2);\n\tif (numbers[0] + numbers[1] == target)\n\t{\n\t\tvIndex.push_back(1);\n\t\tvIndex.push_back(2);\n\t\treturn vIndex;\n\t}\n\tint max = 0,min = 0;\n\tfor (int i=numbers.size()-1;i>=0;--i)\n\t{\n\t\tif (numbers[i] > target && numbers[i - 1] <= target)\n\t\t{\n\t\t\tmax = i-1;\n\t\t\tbreak;\n\t\t}\n\t}\n\twhile (max > min)\n\t{\t\t\n\t\tint mid = (max + min) / 2;\n\t\tif (numbers[max] + numbers[min] == target)\n\t\t{\n\t\t\tvIndex.push_back(min + 1);\n\t\t\tvIndex.push_back(max + 1);\n\t\t\treturn vIndex;\n\t\t} else if (numbers[mid]*2 > target){\n\t\t\tmax = mid;\n\t\t}\n\t\telse if (numbers[mid]*2<target)\t{\n\t\t\tmin = mid;\n\t\t}\n\t}\n\treturn vIndex;\n    }\n")])])]),e("p",[t._v("输入为[2,3,4] 6")]),t._v(" "),e("p",[e("strong",[t._v("这种情况就是尾数比target还要大，所以有缺陷")])]),t._v(" "),e("p",[t._v("还有就是 有序数组的第一个元素可能为 负数 ，比如[-3,1,2,3,4]，target为 0 ，这样的话，第一步会直接定位到 1 这个元素，所以，找max的那里有缺陷")]),t._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\tfor (int i=numbers.size()-1;i>=0;--i)\n\t{\n\t\tif (numbers[0]+ numbers[i] <= target) { max = i; break; }\n\t\telse if (numbers[0] + numbers[i] > target && numbers[0] + numbers[i - 1] <= target)\n\t\t{\n\t\t\tmax = i-1;\n\t\t\tbreak;\n\t\t}\n\t}\n")])])]),e("p",[t._v("加上首元素，numbers[0]+ numbers[i]来判断就可以防止这种情况了。还有就是要判断尾元素是不是就比target小的情况。")]),t._v(" "),e("h5",{attrs:{id:"第三次"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第三次"}},[t._v("#")]),t._v(" 第三次：")]),t._v(" "),e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('vector<int> vIndex;\n\tvIndex.reserve(2);\n\tif (numbers[0] + numbers[1] == target)\n\t{\n\t\tvIndex.push_back(1);\n\t\tvIndex.push_back(2);\n\t\treturn vIndex;\n\t}\n\tint max = 0,min = 0;\n\tfor (int i=numbers.size()-1;i>=0;--i)\n\t{\n\t\tif (numbers[0]+ numbers[i] <= target) { max = i; break; }\n\t\telse if (numbers[0] + numbers[i] > target && numbers[0] + numbers[i - 1] <= target)\n\t\t{\n\t\t\tmax = i-1;\n\t\t\tbreak;\n\t\t}\n\t}\n\t//cout << "max " << max << endl;\n\twhile (max > min)\n\t{\n\t\t\n\t\tint mid = (max + min) / 2;\n\t\t//cout << "max " << max << " min" << min << " mid "<<mid<< " numbers[mid]*2:"<< numbers[mid] * 2 <<endl;\n\t\tif (numbers[max] + numbers[min] == target)\n\t\t{\n\t\t\t//cout << "numbers[max] + numbers[min] == target" << endl;\n\t\t\tvIndex.push_back(min + 1);\n\t\t\tvIndex.push_back(max + 1);\n\t\t\treturn vIndex;\n\t\t} else if (numbers[mid]*2 > target){\n\t\t\tmax = mid;\n\t\t}\n\t\telse if (numbers[mid]*2<=target)\t{\n\t\t\tmin = mid;\n\t\t}\n\t}\n\treturn vIndex;\n')])])]),e("p",[t._v("输入为 "),e("strong",[t._v("[1,2,3,4,4,9,56,90]  8")])]),t._v(" "),e("p",[t._v("这种最中间的两个元素是最终结果，所以要在 numbers[mid] *2 <target的基础上加上 = 号")]),t._v(" "),e("h5",{attrs:{id:"第四次-就告诉我超出时间限制了。。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第四次-就告诉我超出时间限制了。。"}},[t._v("#")]),t._v(" 第四次：就告诉我超出时间限制了。。")]),t._v(" "),e("h5",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),e("h5",{attrs:{id:"直接双指针-简单粗暴"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#直接双指针-简单粗暴"}},[t._v("#")]),t._v(" "),e("strong",[t._v("直接双指针，简单粗暴！！")])]),t._v(" "),e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("vector<int> twoSum(vector<int>& numbers, int target) {\n\t\n\tint low = 0, high = numbers.size() - 1;\n\twhile (low < high) {\n\t\tint sum = numbers[low] + numbers[high];\n\t\tif (sum == target)\n\t\t\treturn vector<int>{ low + 1, high + 1 };\n\t\telse if (sum < target)\n\t\t\t++low;\n\t\telse\n\t\t\t--high;\n\t}\n\treturn { -1, -1 };\n\n}\n\n")])])]),e("p",{attrs:{id:"第一个错误的版本"}}),t._v(" "),e("h3",{attrs:{id:"_278-第一个错误的版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_278-第一个错误的版本"}},[t._v("#")]),t._v(" 278. 第一个错误的版本")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://leetcode-cn.com/problems/first-bad-version/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣原题链接（点我直达）"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。")]),t._v(" "),e("p",[t._v("假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。")]),t._v(" "),e("p",[t._v("你可以通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。")]),t._v(" "),e("p",[t._v("示例:")]),t._v(" "),e("p",[t._v("给定 n = 5，并且 version = 4 是第一个错误的版本。")]),t._v(" "),e("p",[t._v("调用 isBadVersion(3) -> false\n调用 isBadVersion(5) -> true\n调用 isBadVersion(4) -> true")]),t._v(" "),e("p",[t._v("所以，4 是第一个错误的版本。")]),t._v(" "),e("h4",{attrs:{id:"二分法-注意边界。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二分法-注意边界。"}},[t._v("#")]),t._v(" "),e("strong",[t._v("二分法，注意边界。")])]),t._v(" "),e("p",[e("strong",[t._v("不能写 int mid = (lo + hi) / 2; 要写 int mid = lo + (hi - lo) / 2;")])]),t._v(" "),e("p",[t._v("这个题目，返回 lo 或者 hi 都行，因为终止条件是 lo == hi.\n这是二分里比较难的题目了吧，找的是分割点，不是某个值。\n[********########] 就像这样的有序数组，找第一个 # 号。\n二分搜索的演化版本，查找某个值，返回其索引，如果找不到，返回其本来应该所在的位置（比如上面 # 号的位置）。遇到这种二分搜索，就拿这个 bad version 来套就行了。")]),t._v(" "),e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\nbool isBadVersion(int version);\n\nclass Solution {\npublic:\n    int firstBadVersion(int n) {\n        int lo = 1, hi = n;\n        \n        while(lo < hi) {\n            int mid = lo + (hi - lo) / 2;\n            if (isBadVersion(mid)) {\n                hi = mid;\n            } else {\n                lo = mid + 1;\n            }\n        }\n        return hi;\n    }\n};\n")])])]),e("h4",{attrs:{id:"不在循环内定义零时变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不在循环内定义零时变量"}},[t._v("#")]),t._v(" 不在循环内定义零时变量")]),t._v(" "),e("p",[t._v("执行用时 :0 ms, 在所有 C++ 提交中击败了100.00%的用户")]),t._v(" "),e("p",[t._v("内存消耗 :8.3 MB, 在所有 C++ 提交中击败了5.38%的用户")]),t._v(" "),e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" int firstBadVersion(int n) {\n    int low = 1;\n    int mid = low+(n-low ) / 2;\n\twhile (low<n)\n\t{\n        \n\t\tif (isBadVersion(mid))\n\t\t{\n\t\t\tn = mid;\n\t\t}\n\t\telse\n\t\t{\n\t\t\tlow = mid+1;\n\t\t}\n        mid = low+(n-low ) / 2;\n\t}\n\treturn low;\n        \n    }\n")])])]),e("p",{attrs:{id:"两个数组的交集"}}),t._v(" "),e("h3",{attrs:{id:"_350-两个数组的交集-ii"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_350-两个数组的交集-ii"}},[t._v("#")]),t._v(" 350. 两个数组的交集 II")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣原题链接（点我直达）"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("给定两个数组，编写一个函数来计算它们的交集。")]),t._v(" "),e("p",[t._v("示例 1:")]),t._v(" "),e("p",[t._v("输入: nums1 = [1,2,2,1], nums2 = [2,2]\n输出: [2,2]\n示例 2:")]),t._v(" "),e("p",[t._v("输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]\n输出: [4,9]\n说明：")]),t._v(" "),e("p",[t._v("输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。\n我们可以不考虑输出结果的顺序。\n进阶:")]),t._v(" "),e("p",[t._v("如果给定的数组已经排好序呢？你将如何优化你的算法？\n如果 nums1 的大小比 nums2 小很多，哪种方法更优？\n如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？")]),t._v(" "),e("h5",{attrs:{id:"第一种-比较简单易懂"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一种-比较简单易懂"}},[t._v("#")]),t._v(" 第一种，比较简单易懂：")]),t._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {\n\n\tsort(nums1.begin(), nums1.end());\n\tsort(nums2.begin(), nums2.end());\n\tint size1 = nums1.size();\n\tint size2 = nums2.size();\n\tint p1 = 0, p2 = 0;\n\tvector<int> result;\n    //result.reserve(size1 > size2 ? size2 : size1);//加上这一句，并不一定会更快一点。\n\twhile (p1 < size1 && p2 < size2) //很重要\n\t{\n\t\tif (nums1[p1] == nums2[p2])\n\t\t{\n\t\t\tresult.push_back(nums1[p1]);\n\t\t\tp1++;\n\t\t\tp2++;\n\t\t}\n\t\telse if (nums1[p1] < nums2[p2])\n\t\t{\n\t\t\tp1++;\n\t\t}\n\t\telse\n\t\t{\n\t\t\tp2++;\n\t\t}\n\t}\n\treturn result;\n\n}\n")])])]),e("h5",{attrs:{id:"第二种直接在数组上查找"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二种直接在数组上查找"}},[t._v("#")]),t._v(" 第二种直接在数组上查找")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {\n        vector<int> res;\n        vector<int>::iterator it;\n        for(int i=0;i<nums1.size();i++)\n        {\n            it=find(nums2.begin(),nums2.end(),nums1[i]);\n            if(it!=nums2.end())//查找到元素\n            {\n                res.push_back(*it);\n                nums2.erase(it);//删除元素\n            }\n        }\n        return res;\n    }\n")])])]),e("h5",{attrs:{id:"第三中-利用map来进行比对"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第三中-利用map来进行比对"}},[t._v("#")]),t._v(" 第三中，利用map来进行比对")]),t._v(" "),e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {\n\n\tif (nums1.size() > nums2.size()) swap(nums1, nums2);//用元素少的数组元素查找\n\tmap<int, int> a;\n\tfor (int i = 0; i < nums2.size(); i++)//初始化map\n\t{\n\t\tif (!a.count(nums2[i]))\n\t\t\ta.insert(map<int, int>::value_type(nums2[i], 1));\n\t\telse a[nums2[i]]++; //统计相同元素的个数\n\t}\n\tvector<int> res;\n\tfor (int i = 0; i < nums1.size(); i++)\n\t{\n\t\tif (a.count(nums1[i])) //如果有\n\t\t{\n\t\t\tif (a[nums1[i]] != 0)\n\t\t\t{\n\t\t\t\tres.push_back(nums1[i]);\n\t\t\t\ta[nums1[i]]--;\n\t\t\t}\n\t\t}\n\t}\n\treturn res;\n}\n")])])]),e("h5",{attrs:{id:"第四种-unordered-map更快速"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第四种-unordered-map更快速"}},[t._v("#")]),t._v(" 第四种,unordered_map更快速")]),t._v(" "),e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("   vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {\n         // 建立set\n        unordered_map<int,int> s;   // 查找快 和前边区别在于需要记录出现次数\n        for(auto n:nums1)\n        {\n            s[n]++;\n        }\n        \n        // 遍历nums2判断在不在set 里边 在就是交集\n        vector<int> ans;\n        for(auto n:nums2)\n        {\n            auto it=s.find(n);\n            if(it!=s.end() && it->second>0) // 存在且次数大于0 才可以加入\n            {\n                ans.push_back(n);\n                it->second--;      // 用一次次数减一\n               //  s.erase(it);  // 删除已经存在的防止多次输出相同的元素     \n            }\n        }\n        return ans;\n    }\n")])])]),e("p",{attrs:{id:"有效的完全平方数"}}),t._v(" "),e("h3",{attrs:{id:"_367-有效的完全平方数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_367-有效的完全平方数"}},[t._v("#")]),t._v(" 367. 有效的完全平方数")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://leetcode-cn.com/problems/valid-perfect-square/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣原题链接（点我直达）"),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"第一种-int型溢出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一种-int型溢出"}},[t._v("#")]),t._v(" 第一种，int型溢出")]),t._v(" "),e("p",[t._v("给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。")]),t._v(" "),e("p",[t._v("说明：不要使用任何内置的库函数，如  sqrt。")]),t._v(" "),e("p",[t._v("示例 1：")]),t._v(" "),e("p",[t._v("输入：16\n输出：True\n示例 2：")]),t._v(" "),e("p",[t._v("输入：14\n输出：False")]),t._v(" "),e("p",[t._v("Line 8: Char 11: runtime error: signed integer overflow: 1073741824 * 1073741824 cannot be represented in type 'int' (solution.cpp")]),t._v(" "),e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("bool isPerfectSquare(int num) {\n\tint mid=1,low = 1,high=num;\n\twhile (low<=high)\n\t{\n\t\tmid = low + (high - low) / 2;\n\t\tif (mid * mid == num)//这里会溢出，当int为INT_MAX时，mid*mid肯定超过INT_MAX了\n\t\t{\n\t\t\treturn true;\n\t\t}\n\t\telse if (mid*mid >num)\n\t\t{\n\t\t\thigh = mid-1;\n\t\t}\n\t\telse \n\t\t{\n\t\t\tlow = mid+1;\n\t\t}\n\n\t}\n\treturn false;\n}\n")])])]),e("h4",{attrs:{id:"第二种-从46340-1直接搜索"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二种-从46340-1直接搜索"}},[t._v("#")]),t._v(" 第二种，从46340-1直接搜索")]),t._v(" "),e("p",[t._v("INT_MAX 足最大为 2^32 -1 大约为 2147483647，他的平方差是 46340，直接搜索 从 1-46340搜索就行")]),t._v(" "),e("p",[t._v("46340*46340 = 2,147,395,600")]),t._v(" "),e("p",[t._v("46341*46341 = 2,147,488,281")]),t._v(" "),e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    bool isPerfectSquare(int num) {\n   \tint mid=1,low = 1,high=46340;\n\twhile (low<=high)\n\t{\n\t\tmid = low + (high - low) / 2;\n\t\tif (mid * mid == num)\n\t\t{\n\t\t\treturn true;\n\t\t}\n\t\telse if (mid*mid >num)\n\t\t{\n\t\t\thigh = mid-1;\n\t\t}\n\t\telse \n\t\t{\n\t\t\tlow = mid+1;\n\t\t}\n\n\t}\n\treturn false;\n    }\n};\n")])])]),e("p",[t._v("执行用时 :4 ms, 在所有 C++ 提交中击败了72.54%的用户")]),t._v(" "),e("p",[t._v("内存消耗 :8.1 MB, 在所有 C++ 提交中击败了26.74%的用户")]),t._v(" "),e("h4",{attrs:{id:"第三种-一个完全平方数必是连续奇数的和"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第三种-一个完全平方数必是连续奇数的和"}},[t._v("#")]),t._v(" 第三种 ，一个完全平方数必是连续奇数的和")]),t._v(" "),e("p",[t._v("1+3+5+7+9+…+(2n-1)=n^2")]),t._v(" "),e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    bool isPerfectSquare(int num) {\n\tint i = 1;\n\twhile (num > 0)\n\t{\n\t\tnum -= i;\n\t\ti += 2;\n\t}\n\treturn num == 0;\n    }\n")])])]),e("p",[t._v("执行用时 :4 ms, 在所有 C++ 提交中击败了72.54%的用户")]),t._v(" "),e("p",[t._v("内存消耗 :7.9 MB, 在所有 C++ 提交中击败了67.91%的用户")]),t._v(" "),e("p",{attrs:{id:"猜数字大小"}}),t._v(" "),e("h3",{attrs:{id:"_374-猜数字大小"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_374-猜数字大小"}},[t._v("#")]),t._v(" 374. 猜数字大小")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://leetcode-cn.com/problems/guess-number-higher-or-lower/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣原题链接（点我直达）"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("我们正在玩一个猜数字游戏。 游戏规则如下：\n我从 "),e("strong",[t._v("1")]),t._v(" 到 "),e("em",[e("strong",[t._v("n")])]),t._v(" 选择一个数字。 你需要猜我选择了哪个数字。\n每次你猜错了，我会告诉你这个数字是大了还是小了。\n你调用一个预先定义好的接口 "),e("code",[t._v("guess(int num)")]),t._v("，它会返回 3 个可能的结果（"),e("code",[t._v("-1")]),t._v("，"),e("code",[t._v("1")]),t._v(" 或 "),e("code",[t._v("0")]),t._v("）：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("-1 : 我的数字比较小\n 1 : 我的数字比较大\n 0 : 恭喜！你猜对了！\n")])])]),e("p",[e("strong",[t._v("示例 :")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("输入: n = 10, pick = 6\n输出: 6\n")])])]),e("h4",{attrs:{id:"二分法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二分法"}},[t._v("#")]),t._v(" 二分法")]),t._v(" "),e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("int guess(int num);\n\nclass Solution {\npublic:\n    int guessNumber(int n) {\n    int low=1,mid=low+(n-low)/2;\n    while(low<=n)\n    {\n        if(guess(mid)==0) return mid;\n        else if(guess(mid)==1){\n            low=mid+1;\n        }\n        else\n        {\n            n = mid-1;\n        }\n        mid=low+(n-low)/2;\n    }\n        return low;\n        \n    }\n};\n")])])]),e("p",[t._v("执行用时 :4 ms, 在所有 C++ 提交中击败了70.91%的用户")]),t._v(" "),e("p",[t._v("内存消耗 :8.3 MB, 在所有 C++ 提交中击败了5.38%的用户")]),t._v(" "),e("p",{attrs:{id:"判断子序列"}}),t._v(" "),e("h3",{attrs:{id:"_392-判断子序列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_392-判断子序列"}},[t._v("#")]),t._v(" 392. 判断子序列")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://leetcode-cn.com/problems/is-subsequence/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣原题链接（点我直达）"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("给定字符串 s 和 t ，判断 s 是否为 t 的子序列。")]),t._v(" "),e("p",[t._v("你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。")]),t._v(" "),e("p",[t._v('字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。')]),t._v(" "),e("p",[t._v('示例 1:\ns = "abc", t = "ahbgdc"')]),t._v(" "),e("p",[t._v("返回 true.")]),t._v(" "),e("p",[t._v('示例 2:\ns = "axc", t = "ahbgdc"')]),t._v(" "),e("p",[t._v("返回 false.")]),t._v(" "),e("p",[t._v("后续挑战 :")]),t._v(" "),e("p",[t._v("如果有大量输入的 S，称作S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？")]),t._v(" "),e("h4",{attrs:{id:"第一版自己写的-比较耗费空间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一版自己写的-比较耗费空间"}},[t._v("#")]),t._v(" 第一版自己写的，比较耗费空间")]),t._v(" "),e("p",[t._v("执行用时 :52 ms, 在所有 cpp 提交中击败了83.51%的用户")]),t._v(" "),e("p",[t._v("内存消耗 :17.1 MB, 在所有 cpp 提交中击败了21.38%的用户")]),t._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("bool isSubsequence(string s, string t) {\n\n\tint len = t.size(),count=0;\n\tfor (unsigned i = 0,j=0; i < s.size(); ++i) {\n\n\t\twhile (true) {\n\t\t\tif (j < len && s[i] == t[j]) {\n\t\t\t\tcount++;\n\t\t\t\tj++;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\telse if (j < len)\n\t\t\t\tj++;\n\t\t\telse\n\t\t\t\tbreak;\n\t\t}\n\n\t\tif (j == len && i<s.size()-1) {\n\t\t\treturn false;\n\t\t}\n\n\n\t}\n\tif (count == s.size())\n\t\treturn true;\n\telse\n\t\treturn false;\n\n\n}\n\n\n")])])]),e("h4",{attrs:{id:"后续挑战-很不错"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后续挑战-很不错"}},[t._v("#")]),t._v(" 后续挑战，很不错")]),t._v(" "),e("p",[t._v("后续挑战，输入量大，小写字母创建25的二维数组，存储t的坐标，这样就可以把s的判断直接转为坐标的判断，\ndp[0]代表了存储了a出现在t的所有的位置,逐个字符判断s的字符顺序是否在t内，直接返回结果。\n时间复杂度O(t.size()+2000)：分别为创建数组需要O(t.size()),\n索引是递增的使用二分查找s的单个字符20次之内就可找到需要O(100*20)。\n适用大量的输入判断子序列。")]),t._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("bool isSubsequence(string s, string t) {        \n    vector<vector<int>>dp(26);\n    int tag=-1;\n    for(int i=0;i<t.size();i++)\n        dp[t[i]-'a'].push_back(i);\n    for(int i=0;i<s.size();i++){\n        int now=s[i]-'a';\n        int left=0,right=dp[now].size()-1;\n        while(left<right){\n            int mid=(left+right)/2;\n            if(dp[now][mid]>tag)\n                right=mid;\n            else\n                left=mid+1;\n        }\n        if(right<left || dp[now][left]<tag)return false;\n        tag=dp[now][left];\n    \n\n}\nreturn true;\n\n}\n")])])]),e("p",{attrs:{id:"排列硬币"}}),t._v(" "),e("h3",{attrs:{id:"_441-排列硬币"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_441-排列硬币"}},[t._v("#")]),t._v(" 441. 排列硬币")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://leetcode-cn.com/problems/arranging-coins/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣原题链接（点我直达）"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就必须正好有 k 枚硬币。")]),t._v(" "),e("p",[t._v("给定一个数字 n，找出可形成完整阶梯行的总行数。")]),t._v(" "),e("p",[t._v("n 是一个非负整数，并且在32位有符号整型的范围内。")]),t._v(" "),e("p",[t._v("示例 1:")]),t._v(" "),e("p",[t._v("n = 5")]),t._v(" "),e("p",[t._v("硬币可排列成以下几行:\n¤\n¤ ¤\n¤ ¤")]),t._v(" "),e("p",[t._v("因为第三行不完整，所以返回2.\n示例 2:")]),t._v(" "),e("p",[t._v("n = 8")]),t._v(" "),e("p",[t._v("硬币可排列成以下几行:\n¤\n¤ ¤\n¤ ¤ ¤\n¤ ¤")]),t._v(" "),e("p",[t._v("因为第四行不完整，所以返回3.")]),t._v(" "),e("h4",{attrs:{id:"第一种-挨个递减"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一种-挨个递减"}},[t._v("#")]),t._v(" 第一种，挨个递减")]),t._v(" "),e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    int arrangeCoins(int n) {\n\tif (n == 0) return 0;\n\tint i = 1;\n\twhile (n > 0)\n\t{\n\t\tn -= i;\n\t\ti += 1;\n\t}\n\tif (n < 0) return i - 2; //这里需要注意，n是否为当前行最后一个\n\telse\n\t\treturn i - 1;\n    }\n")])])]),e("p",[t._v("执行用时 :12 ms, 在所有 C++ 提交中击败了62.52%的用户")]),t._v(" "),e("p",[t._v("内存消耗 :8.2 MB, 在所有 C++ 提交中击败了75.18%的用户")]),t._v(" "),e("p",[e("strong",[t._v("比如 10 = 1+2+3+4 ，刚好可以到第四行，所以返回i-1，而对于11=1+2+3+4+1，此时也应该返回4，而此时i=6；所以返回i-2")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("0   0\n1   1\n2   1\n3   2\n4   2\n5   2\n6   3\n7   3\n8   3\n9   3\n10   4\n11   4\n12   4\n13   4\n14   4\n15   5\n16   5\n17   5\n18   5\n19   5\n20   5\n")])])]),e("h4",{attrs:{id:"第二种-列数学公式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二种-列数学公式"}},[t._v("#")]),t._v(" 第二种，列数学公式")]),t._v(" "),e("p",[t._v("1+2+3+4+。。+k=k(k+1)/2")]),t._v(" "),e("p",[t._v("所以 k(k+1)/2<=n;")]),t._v(" "),e("p",[t._v("k^2 + k ＜＝ n　×　２；\n配方　４ｋ＾２　＋　４ｋ　＋　１　＜＝　８ｎ　＋　１；\n２ｋ　＋　１　＜＝　ｓｑｒｔ（８ｎ　＋　１）；\nｋ＜＝（sqrt（８ｎ＋１）－１）／２；")]),t._v(" "),e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("int arrangeCoins(int n) {\n       return (sqrt(n * 8.0 + 1) - 1) / 2;\n    }\n")])])]),e("p",[t._v("执行用时 :8 ms, 在所有 C++ 提交中击败了80.98%的用户")]),t._v(" "),e("p",[t._v("内存消耗 :8.3 MB, 在所有 C++ 提交中击败了73.70%的用户")]),t._v(" "),e("p",{attrs:{id:"供暖器"}}),t._v(" "),e("h3",{attrs:{id:"_475-供暖器-很经典"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_475-供暖器-很经典"}},[t._v("#")]),t._v(" 475. 供暖器,很经典")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://leetcode-cn.com/problems/heaters/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣原题链接（点我直达）"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。")]),t._v(" "),e("p",[t._v("现在，给出位于一条水平线上的房屋和供暖器的位置，找到可以覆盖所有房屋的最小加热半径。")]),t._v(" "),e("p",[t._v("所以，你的输入将会是房屋和供暖器的位置。你将输出供暖器的最小加热半径。")]),t._v(" "),e("p",[t._v("说明:")]),t._v(" "),e("p",[t._v("给出的房屋和供暖器的数目是非负数且不会超过 25000。\n给出的房屋和供暖器的位置均是非负数且不会超过10^9。\n只要房屋位于供暖器的半径内(包括在边缘上)，它就可以得到供暖。\n所有供暖器都遵循你的半径标准，加热的半径也一样。\n示例 1:")]),t._v(" "),e("p",[t._v("输入: [1,2,3],[2]\n输出: 1\n解释: 仅在位置2上有一个供暖器。如果我们将加热半径设为1，那么所有房屋就都能得到供暖。\n示例 2:")]),t._v(" "),e("p",[t._v("输入: [1,2,3,4],[1,4]\n输出: 1\n解释: 在位置1, 4上有两个供暖器。我们需要将加热半径设为1，这样所有房屋就都能得到供暖。")]),t._v(" "),e("h4",{attrs:{id:"第一种-错误的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一种-错误的"}},[t._v("#")]),t._v(" 第一种，错误的")]),t._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('int minRadius(vector<int>& houses, int& pos1, int &pos2) {\n\tvector<int>::iterator it1 = find(houses.begin(), houses.end(), pos1);\n\tvector<int>::iterator it2 = find(houses.begin(), houses.end(), pos2);\n\tint radius1 = *(it1 + (it2 - it1) / 2) - pos1,radius2=pos2- *(it1 + (it2 - it1) / 2);\n\t\n\t//cout << " pos1 pos2  " << pos1 << "  " << pos2 << "   radius1  radius2 " << radius1 <<"  "<< radius2 << endl;\n\treturn radius1>radius2?radius1:radius2;\n}\n\n\n\nint findRadius(vector<int>& houses, vector<int>& heaters) {\n\tif (heaters.size() == 1) return fabs(houses[0] - heaters[0]) > fabs(houses[houses.size() - 1] - heaters[0]) ? fabs(houses[0] - heaters[0]) : fabs(houses[houses.size() - 1] - heaters[0]);\n\tsort(houses.begin(), houses.end());\n\tsort(heaters.begin(), heaters.end());\n\tint maxRaius = 0;\n\tint temp = fabs(houses[0] - heaters[0]);\n\tmaxRaius = maxRaius > temp ? maxRaius : temp;\n\t//cout << maxRaius << endl;\n\tfor (vector<int>::iterator it = heaters.begin(); it != heaters.end()-1;++it ) {\n\t\t\n\t\ttemp=minRadius(houses, *it, *(it+1));\n\t\tmaxRaius = maxRaius > temp ? maxRaius : temp;\n\t\t//cout << maxRaius << endl;\n\t}\n\ttemp = fabs(houses[houses.size() - 1] - heaters[heaters.size()-1]);\n\tmaxRaius = maxRaius > temp ? maxRaius : temp;\n\t//cout << maxRaius << endl;\n\treturn maxRaius;\n}\n')])])]),e("p",[t._v("我的想法是，比较每两个热水器中间地方，距离房子的两边距离分别为多少。当然了，热水器为1的时候，就看第一个房子和最后一个房子到热暑期的距离，谁比较大了。比如[1,2,3,4],[1,4]，其实最短距离为1，而不是2。")]),t._v(" "),e("h4",{attrs:{id:"第二种-直接比较每个房屋前后热水器的距离"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二种-直接比较每个房屋前后热水器的距离"}},[t._v("#")]),t._v(" 第二种，直接比较每个房屋前后热水器的距离")]),t._v(" "),e("p",[t._v("房屋左右侧的热水器，取距离小的那个，最终取的是所有房屋所需最大的那个半径。")]),t._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\nint minRadius(vector<int>& heaters, int& target) {\n\tif (target < heaters[0]) return heaters[0] - target;\n\tif (target > heaters[heaters.size() - 1]) return target - heaters[heaters.size() - 1];\n\tint mid = 0, low = 0, high = heaters.size() - 1;\n\twhile (low + 1 < high)\n\t{\n\t\tmid = low + (high - low) / 2;\n\t\tif (target == heaters[mid]) return 0;\n\t\telse if (target > heaters[mid]) {\n\t\t\tlow = mid;\n\t\t}\n\t\telse {\n\t\t\thigh = mid;\n\t\t}\n\t}//差值为1的时候就停止判断，所以需要再进行判断一下\n\n\tif (heaters[low] == target || heaters[high] == target) return 0;\n\telse\n\t{\treturn min(fabs(target - heaters[low]), fabs(target - heaters[high]));\n\t}\n}\n\n\n\nint findRadius(vector<int>& houses, vector<int>& heaters) {\n\tif (heaters.size() == 1) return max(heaters[0] - houses[0], houses[houses.size() - 1] - heaters[0]);\n\tsort(heaters.begin(), heaters.end());//对热水器进行排序\n\tint temp,maxRaius = 0;\n\tfor (vector<int>::iterator it = houses.begin(); it != houses.end();++it ) {\n\t\t\n\t\ttemp=minRadius(heaters, *it);\n\t\tmaxRaius = maxRaius > temp ? maxRaius : temp;\n\t\t//cout << maxRaius << endl;\n\t}\n\n\t//cout << maxRaius << endl;\n\treturn maxRaius;\n}\n")])])]),e("p",{attrs:{id:"二分查找"}}),t._v(" "),e("h3",{attrs:{id:"_704-二分查找"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_704-二分查找"}},[t._v("#")]),t._v(" 704. 二分查找")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://leetcode-cn.com/problems/binary-search/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣原题链接（点我直达）"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。")]),t._v(" "),e("p",[t._v("示例 1:")]),t._v(" "),e("p",[t._v("输入: nums = [-1,0,3,5,9,12], target = 9\n输出: 4\n解释: 9 出现在 nums 中并且下标为 4\n示例 2:")]),t._v(" "),e("p",[t._v("输入: nums = [-1,0,3,5,9,12], target = 2\n输出: -1\n解释: 2 不存在 nums 中因此返回 -1")]),t._v(" "),e("p",[t._v("提示：")]),t._v(" "),e("p",[t._v("你可以假设 nums 中的所有元素是不重复的。\nn 将在 [1, 10000]之间。\nnums 的每个元素都将在 [-9999, 9999]之间。")]),t._v(" "),e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    int search(vector<int>& nums, int target) {\n\tint mid = 0, low = 0, high = nums.size() - 1;\n\twhile (low < high) {\n\t\tmid = low + (high - low) / 2;\n\t\tif(nums[mid]==target)\n\t\t{\n\t\t\treturn mid;\n\t\t}\n\t\telse if (nums[mid] < target) {\n\t\t\tlow = mid + 1;\n\t\t}\n\t\telse\n\t\t{\n\t\t\thigh = mid - 1;\n\t\t}\n\n\t}\n\tif (nums[low] == target) return low;\n\telse \n\t\treturn -1;\n    }\n")])])]),e("p",[t._v("执行用时 :68 ms, 在所有 C++ 提交中击败了38.93%的用户")]),t._v(" "),e("p",[t._v("内存消耗 :11 MB, 在所有 C++ 提交中击败了69.09%的用户")]),t._v(" "),e("h4",{attrs:{id:"第二种-二分法经典模板三解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二种-二分法经典模板三解析"}},[t._v("#")]),t._v(" 第二种，二分法经典模板三解析")]),t._v(" "),e("p",[t._v("循环中止条件为 start < end，代表差值为1的时候就中止了\n同时\nstart = mid;\nend = mid;\n这就代表，如果搜寻到start和end相差为1的时候，循环就已经停止，所以需要在循环结束后继续判断")]),t._v(" "),e("p",[t._v("个人比较喜欢用模版三，因为更加清晰易理解，后面如果需要基于此修改的时候，也更能够想清楚。")]),t._v(" "),e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("int search(vector<int>& nums, int target) {\n\n    int start = 0;\n    int end = nums.size() - 1;\n    while (start + 1 < end) {\n        //start和end差值为1的时候，直接就中止了。\n        int mid = start + (end - start) / 2;\n        if (nums[mid] < target) {\n            start = mid;\n        }\n        else {\n            end = mid;\n        }\n    }\n    if (nums[start] == target) {\n        //因为差值为1的时候，直接就中止了，所以，需要判断start和end\n        return start;\n    }\n    if (nums[end] == target) {\n        //因为差值为1的时候，直接就中止了，所以，需要判断start和end\n        return end;\n    }\n    return -1;\n}\n")])])]),e("h4",{attrs:{id:"二分法经典模板一解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二分法经典模板一解析"}},[t._v("#")]),t._v(" 二分法经典模板一解析")]),t._v(" "),e("p",[t._v("循环中止条件为 start <= end，代表差值为1和0的时候都会继续循环。\n代码相应的处理方法就是\n"),e("strong",[t._v("start = mid + 1;")]),t._v(" "),e("strong",[t._v("end = mid - 1;")])]),t._v(" "),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("int search(vector<int>& nums, int target) {\nif (nums.size() == 0) {\n        return -1;\n    }\n    int start = 0;\n    int end = nums.size() - 1;\n    while (start <= end) {\n        //差值为1的时候，mid优先等于start\n        //差值为0的时候，还会继续循环\n        int mid = start + (end - start) / 2;\n        if (nums[mid] == target) {\n            return mid;\n        }\n        else if (nums[mid] < target) {\n            //差值为1的情况下，mid比target小，加一/\n            //差值为0的情况下，mid比target小，加一则结束\n            start = mid + 1;\n        }\n        else {\n            //差值为1的情况下，mid比target大，那么减一\n            //差值为0的情况下，mid比target大，减一则结束 \n            end = mid - 1;\n        }\n    }      \n    return -1;\n}  \n")])])]),e("p",{attrs:{id:"寻找比目标字母大的最小字母"}}),t._v(" "),e("p",[t._v("​")]),t._v(" "),e("h3",{attrs:{id:"_744-寻找比目标字母大的最小字母"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_744-寻找比目标字母大的最小字母"}},[t._v("#")]),t._v(" 744. 寻找比目标字母大的最小字母")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://leetcode-cn.com/problems/find-smallest-letter-greater-than-target/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣原题链接（点我直达）"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("给定一个只包含小写字母的有序数组letters 和一个目标字母 target，寻找有序数组里面比目标字母大的最小字母。")]),t._v(" "),e("p",[t._v("数组里字母的顺序是循环的。举个例子，如果目标字母target = 'z' 并且有序数组为 letters = ['a', 'b']，则答案返回 'a'。")]),t._v(" "),e("p",[t._v("示例:")]),t._v(" "),e("p",[t._v('输入:\nletters = ["c", "f", "j"]\ntarget = "a"\n输出: "c"')]),t._v(" "),e("p",[t._v('输入:\nletters = ["c", "f", "j"]\ntarget = "c"\n输出: "f"')]),t._v(" "),e("p",[t._v('输入:\nletters = ["c", "f", "j"]\ntarget = "d"\n输出: "f"')]),t._v(" "),e("p",[t._v('输入:\nletters = ["c", "f", "j"]\ntarget = "g"\n输出: "j"')]),t._v(" "),e("p",[t._v('输入:\nletters = ["c", "f", "j"]\ntarget = "j"\n输出: "c"')]),t._v(" "),e("p",[t._v('输入:\nletters = ["c", "f", "j"]\ntarget = "k"\n输出: "c"\n注:')]),t._v(" "),e("p",[t._v("letters长度范围在[2, 10000]区间内。\nletters 仅由小写字母组成，最少包含两个不同的字母。\n目标字母target 是一个小写字母。")]),t._v(" "),e("h4",{attrs:{id:"二分法-比较绕一点了"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二分法-比较绕一点了"}},[t._v("#")]),t._v(" 二分法，比较绕一点了")]),t._v(" "),e("div",{staticClass:"language-C++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("char nextGreatestLetter(vector<char>& letters, char target) {\n\tint l = 0;\n\tint r = letters.size() - 1;\n\twhile (l <= r)\n\t{\n\t\tint mid = (l + r) / 2;\n\t\tif (target < letters[mid])//确切大于了，右侧再向后退\n\t\t\tr = mid - 1;\n\t\telse\n\t\t\tl = mid + 1;//即使是等于，也依然向前走\n\t}\n\treturn letters[l % letters.size()];//到最后节点了，返回第一个元素\n}\n")])])]),e("p",[t._v("执行用时 :8 ms, 在所有 C++ 提交中击败了99.29%的用户")]),t._v(" "),e("p",[t._v("内存消耗 :9.1 MB, 在所有 C++ 提交中击败了78.92%的用户")])])}),[],!1,null,null,null);n.default=r.exports}}]);