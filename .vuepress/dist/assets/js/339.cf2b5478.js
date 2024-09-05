(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{755:function(e,n,t){"use strict";t.r(n);var r=t(62),a=Object(r.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",{attrs:{id:"对称的二叉树"}}),e._v(" "),t("h4",{attrs:{id:"剑指-offer-28-对称的二叉树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#剑指-offer-28-对称的二叉树"}},[e._v("#")]),e._v(" 剑指 Offer 28. 对称的二叉树")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/",target:"_blank",rel:"noopener noreferrer"}},[e._v("力扣原题链接（点我直达）"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。")]),e._v(" "),t("p",[e._v("例如，二叉树 [1,2,2,3,4,4,3] 是对称的。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    1\n   / \\\n  2   2\n / \\ / \\\n3  4 4  3\n")])])]),t("p",[e._v("但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:")]),e._v(" "),t("div",{staticClass:"language-C++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    1\n   / \\\n  2   2\n   \\   \\\n   3    3\n")])])]),t("p",[t("strong",[e._v("示例 1：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("输入：root = [1,2,2,3,4,4,3]\n输出：true\n")])])]),t("p",[t("strong",[e._v("示例 2：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("输入：root = [1,2,2,null,3,null,3]\n输出：false\n")])])]),t("p",[t("strong",[e._v("限制：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("0 <= 节点个数 <= 1000\n")])])]),t("h5",{attrs:{id:"_1、递归法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、递归法"}},[e._v("#")]),e._v(" 1、递归法")]),e._v(" "),t("p",[e._v("执行用时：12 ms, 在所有 C++ 提交中击败了32.98%的用户")]),e._v(" "),t("p",[e._v("内存消耗：16.3 MB, 在所有 C++ 提交中击败了100.00%的用户")]),e._v(" "),t("div",{staticClass:"language-C++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" bool isEqual(TreeNode*node1,TreeNode*node2){\n\n        if(node1==nullptr && node2 ==nullptr)  return true;\n        if(node1==nullptr && node2!=nullptr) return false;\n        if(node2==nullptr && node1!=nullptr) return false;\n        if(node1->val == node2->val) {\n            return isEqual(node1->left,node2->right) && isEqual(node1->right,node2->left);\n\n        }else\n            return false;\n\n    }\n    bool isSymmetric(TreeNode* root) {\n\n        if(root==nullptr) return true;\n        return isEqual(root->left,root->right);\n\n    }\n")])])]),t("h5",{attrs:{id:"_2、递归法、稍微改进一点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、递归法、稍微改进一点"}},[e._v("#")]),e._v(" 2、递归法、稍微改进一点")]),e._v(" "),t("p",[e._v("执行用时：8 ms, 在所有 C++ 提交中击败了67.83%的用户")]),e._v(" "),t("p",[e._v("内存消耗：16.4 MB, 在所有 C++ 提交中击败了100.00%的用户")]),e._v(" "),t("div",{staticClass:"language-C++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" bool isEqual(TreeNode*node1,TreeNode*node2){\n\n        if(node1==nullptr && node2 ==nullptr)  return true;\n        if(node1 ==nullptr || node2==nullptr) return false;//减少判断\n        if(node1->val == node2->val) {\n            return isEqual(node1->left,node2->right) && isEqual(node1->right,node2->left);\n\n        }else\n            return false;\n\n    }\n    bool isSymmetric(TreeNode* root) {\n\n        if(root==nullptr) return true;\n        return isEqual(root->left,root->right);\n\n    }\n")])])]),t("h5",{attrs:{id:"_3、迭代法-借助栈-太麻烦了-不值得借鉴"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、迭代法-借助栈-太麻烦了-不值得借鉴"}},[e._v("#")]),e._v(" 3、迭代法，借助栈  太麻烦了，不值得借鉴")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    1\n   / \\\n  2   2\n   \\   \\\n   3    3\n\n \n")])])]),t("div",{staticClass:"language-C++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    bool isSymmetric(TreeNode* root) {\n        if(!root){\n            return true;\n        }\n        queue<TreeNode *> que1;\n        que1.push(root);\n        while(!que1.empty()){\n            int size = que1.size();\n            vector<TreeNode *> tmp;//判断虽然不是镜像节点，但是值依然相等的情况，比如上述情况\n            while(size > 0){\n                TreeNode *fronts = que1.front();\n                que1.pop();\n                tmp.push_back(fronts->left);\n                if(fronts->left){\n                    que1.push(fronts->left);\n                }\n                tmp.push_back(fronts->right);\n                if(fronts->right){\n                    que1.push(fronts->right);\n                }\n                size --;\n            }\n            int i=0;\n            int j=tmp.size()-1;\n            while(i<j){\n                if(tmp[i] != nullptr && tmp[j] != nullptr){\n                    if(tmp[i]->val != tmp[j]->val){\n                        return false;\n                    }\n                }\n                else if(tmp[i] == nullptr && tmp[j] == nullptr){\n                }\n                else{\n                    return false;\n                }\n                i++;\n                j--;\n            }\n        }\n        return true;\n    }\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);