// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Strings.sol';
import 'base64-sol/base64.sol';

import './HexStrings.sol';
import './ToColor.sol';

contract GOG is ERC721, Ownable {
    using Strings for uint256;
    using HexStrings for uint160;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    using ToColor for bytes3;

    constructor() ERC721('Gorilla Gang', 'GOG') {}

    mapping(uint256 => bytes3) public bgColor;
    mapping(uint256 => bytes3) public eyeColor;
    uint256 public mintDeadline = block.timestamp + 48 hours;

    function mintItem() public returns (uint256) {
        require(block.timestamp < mintDeadline, 'DONE MINTING');
        _tokenIds.increment();
        uint256 id = _tokenIds.current();
        _mint(msg.sender, id);

        bytes32 predictableRandom = keccak256(
            abi.encodePacked(
                blockhash(block.number - 1),
                msg.sender,
                address(this),
                id
            )
        );
        eyeColor[id] =
            bytes2(predictableRandom[0]) |
            (bytes2(predictableRandom[1]) >> 8) |
            (bytes3(predictableRandom[2]) >> 16);
        bgColor[id] =
            bytes2(predictableRandom[0]) |
            (bytes2(predictableRandom[1]) >> 8) |
            (bytes3(predictableRandom[2]) >> 16);

        return id;
    }

    function tokenURI(uint256 id) public view override returns (string memory) {
        require(_exists(id), 'not exist');
        string memory name = string(
            abi.encodePacked('Gorila #', id.toString())
        );
        string memory description = string(abi.encodePacked('Blocky'));
        string memory image = Base64.encode(bytes(generateSVGofTokenById(id)));

        return
            string(
                abi.encodePacked(
                    'data:application/json;base64,',
                    Base64.encode(
                        bytes(
                            abi.encodePacked(
                                '{"name":"',
                                name,
                                '", "description":"',
                                description,
                                '", "attributes": [{"trait_type": "eyeColor", "value": "#',
                                eyeColor[id].toColor(),
                                 '"},{"trait_type": "backgroudColor", "value": ',
                                bgColor[id].toColor(),
                                '}], "owner":"',
                                (uint160(ownerOf(id))).toHexString(20),
                                '", "image": "',
                                'data:image/svg+xml;base64,',
                                image,
                                '"}'
                            )
                        )
                    )
                )
            );
    }

    function generateSVGofTokenById(uint256 id)
        internal
        view
        returns (string memory)
    {
        string memory svg = string(
            abi.encodePacked(
                '<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">',
                renderTokenById(id),
                '</svg>'
            )
        );

        return svg;
    }

    // Visibility is `public` to enable it being called by other contracts for composition.
    function renderTokenById(uint256 id) public view returns (string memory) {
        string memory render = string(
            abi.encodePacked(
                '<rect width="200" height="200" fill="#',
                bgColor[id].toColor(),
                '"/><circle cx="51" cy="101" r="16" fill="#C4C4C4"/>',
                '<g style="mix-blend-mode:multiply"><circle cx="51" cy="101" r="12" fill="#C4C4C4"/></g>',
                '<circle cx="149" cy="101" r="16" fill="#C4C4C4"/>',
                '<g style="mix-blend-mode:multiply"><circle cx="149" cy="101" r="12" fill="#C4C4C4"/></g>',
                '<path d="M97.8427 40.0612C97.8001 37.866 99.3724 36.0482 101.355 36.0009C103.337 35.9537 104.979 37.6949 105.021 39.8901L105.082 43.0053L106.035 40.1045C106.713 38.0412 108.774 36.9774 110.637 37.7284C112.5 38.4793 113.461 40.7607 112.783 42.824L109.508 52.7862C108.83 54.8495 106.77 55.9133 104.907 55.1623C104.31 54.9219 103.806 54.5246 103.419 54.0278C102.916 54.3466 102.336 54.5347 101.715 54.5495C101.207 54.5616 100.721 54.4561 100.279 54.2556C99.9481 55.3769 99.172 56.3244 98.0934 56.7592C96.2302 57.5101 94.17 56.4463 93.4919 54.383L90.2175 44.4208C89.5393 42.3575 90.5 40.0761 92.3632 39.3252C94.2264 38.5742 96.2866 39.638 96.9647 41.7013L97.9318 44.6437L97.8427 40.0612Z" fill="#393939"/>',
                '<path d="M53.3099 93.1972C52.0533 68.0652 72.0915 47 97.255 47H104.281C129.618 47 149.719 68.3439 148.202 93.6352L148 97L148.909 117.002C150.048 142.061 130.039 163 104.955 163H96.6982C71.7445 163 51.7852 142.27 52.7298 117.335L53.5 97L53.3099 93.1972Z" fill="#393939"/>',
                '<path fill-rule="evenodd" clip-rule="evenodd" d="M72.0941 104.582C72.6282 104.115 72.6379 103.274 72.1238 102.785C68.3513 99.1923 66 94.1207 66 88.5C66 77.6078 74.83 68.7778 85.7222 68.7778C91.6409 68.7778 96.9506 71.385 100.566 75.5134C101.054 76.0717 101.946 76.0717 102.434 75.5134C106.049 71.385 111.359 68.7778 117.278 68.7778C128.17 68.7778 137 77.6078 137 88.5C137 94.1279 134.643 99.2052 130.862 102.798C130.347 103.288 130.356 104.129 130.89 104.597C136.474 109.485 140 116.666 140 124.67C140 137.347 131.102 148.557 118.507 150C106.722 151.35 96.3314 151.326 84.5503 149.971C71.9386 148.519 63 137.314 63 124.619C63 116.629 66.5201 109.461 72.0941 104.582Z" fill="#B5B5B5"/>',
                '<path fill-rule="evenodd" clip-rule="evenodd" d="M139.81 121.472C139.936 122.52 140 123.588 140 124.67C140 137.348 131.102 148.557 118.507 150C106.722 151.35 96.3314 151.326 84.5503 149.971C71.9386 148.519 63 137.314 63 124.619C63 124.061 63.0172 123.507 63.051 122.957C70.8393 112.221 85.3656 105 102 105C117.855 105 131.795 111.56 139.81 121.472Z" fill="#DEDDDD"/>',
                '<circle cx="83" cy="85" r="11" fill="white"/>',
                '<circle cx="83" cy="85" r="7.33333" fill="#',
                eyeColor[id].toColor(),
                '"/><circle cx="85.75" cy="82.8612" r="2.75" fill="white"/>',
                '<circle cx="119" cy="85" r="11" fill="white"/>',
                '<circle cx="119" cy="85" r="7.33333" fill="#',
                eyeColor[id].toColor(),
                '"/><circle cx="121.75" cy="82.8612" r="2.75" fill="white"/>',
                '<ellipse cx="87" cy="119" rx="3" ry="4" fill="#393939"/>',
                '<ellipse cx="116" cy="119" rx="3" ry="4" fill="#393939"/>',
                '<circle cx="73.5" cy="129.5" r="5.5" fill="#FFCEB9"/>',
                '<circle cx="128.5" cy="129.5" r="5.5" fill="#FFCEB9"/>',
                '<circle cx="73.5" cy="129.5" r="5.5" fill="#FFCEB9"/>',
                '<circle cx="128.5" cy="129.5" r="5.5" fill="#FFCEB9"/>',
                '<path d="M88 132C92.7273 140 109.535 140 114 132" stroke="#393939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
                '<circle cx="51" cy="101" r="16" fill="#C4C4C4"/>',
                '<g style="mix-blend-mode:multiply"><circle cx="51" cy="101" r="12" fill="#C4C4C4"/></g>',
                '<circle cx="149" cy="101" r="16" fill="#C4C4C4"/>',
                '<g style="mix-blend-mode:multiply"><circle cx="149" cy="101" r="12" fill="#C4C4C4"/></g>',
                '<path d="M97.8427 40.0612C97.8001 37.866 99.3724 36.0482 101.355 36.0009C103.337 35.9537 104.979 37.6949 105.021 39.8901L105.082 43.0053L106.035 40.1045C106.713 38.0412 108.774 36.9774 110.637 37.7284C112.5 38.4793 113.461 40.7607 112.783 42.824L109.508 52.7862C108.83 54.8495 106.77 55.9133 104.907 55.1623C104.31 54.9219 103.806 54.5246 103.419 54.0278C102.916 54.3466 102.336 54.5347 101.715 54.5495C101.207 54.5616 100.721 54.4561 100.279 54.2556C99.9481 55.3769 99.172 56.3244 98.0934 56.7592C96.2302 57.5101 94.17 56.4463 93.4919 54.383L90.2175 44.4208C89.5393 42.3575 90.5 40.0761 92.3632 39.3252C94.2264 38.5742 96.2866 39.638 96.9647 41.7013L97.9318 44.6437L97.8427 40.0612Z" fill="#393939"/>',
                '<path d="M53.3099 93.1972C52.0533 68.0652 72.0915 47 97.255 47H104.281C129.618 47 149.719 68.3439 148.202 93.6352L148 97L148.909 117.002C150.048 142.061 130.039 163 104.955 163H96.6982C71.7445 163 51.7852 142.27 52.7298 117.335L53.5 97L53.3099 93.1972Z" fill="#393939"/>',
                '<path fill-rule="evenodd" clip-rule="evenodd" d="M72.0941 104.582C72.6282 104.115 72.6379 103.274 72.1238 102.785C68.3513 99.1923 66 94.1207 66 88.5C66 77.6078 74.83 68.7778 85.7222 68.7778C91.6409 68.7778 96.9506 71.385 100.566 75.5134C101.054 76.0717 101.946 76.0717 102.434 75.5134C106.049 71.385 111.359 68.7778 117.278 68.7778C128.17 68.7778 137 77.6078 137 88.5C137 94.1279 134.643 99.2052 130.862 102.798C130.347 103.288 130.356 104.129 130.89 104.597C136.474 109.485 140 116.666 140 124.67C140 137.347 131.102 148.557 118.507 150C106.722 151.35 96.3314 151.326 84.5503 149.971C71.9386 148.519 63 137.314 63 124.619C63 116.629 66.5201 109.461 72.0941 104.582Z" fill="#B5B5B5"/>',
                '<path fill-rule="evenodd" clip-rule="evenodd" d="M139.81 121.472C139.936 122.52 140 123.588 140 124.67C140 137.348 131.102 148.557 118.507 150C106.722 151.35 96.3314 151.326 84.5503 149.971C71.9386 148.519 63 137.314 63 124.619C63 124.061 63.0172 123.507 63.051 122.957C70.8393 112.221 85.3656 105 102 105C117.855 105 131.795 111.56 139.81 121.472Z" fill="#DEDDDD"/>',
                '<circle cx="83" cy="85" r="11" fill="white"/>',
                '<circle cx="83" cy="85" r="7.33333" fill="#393939"/>',
                '<circle cx="85.75" cy="82.8612" r="2.75" fill="white"/>',
                '<circle cx="119" cy="85" r="11" fill="white"/>',
                '<circle cx="119" cy="85" r="7.33333" fill="#393939"/>',
                '<circle cx="121.75" cy="82.8612" r="2.75" fill="white"/>',
                '<ellipse cx="87" cy="119" rx="3" ry="4" fill="#393939"/>',
                '<ellipse cx="116" cy="119" rx="3" ry="4" fill="#393939"/>',
                '<circle cx="73.5" cy="129.5" r="5.5" fill="#FFCEB9"/>',
                '<circle cx="128.5" cy="129.5" r="5.5" fill="#FFCEB9"/>',
                '<circle cx="73.5" cy="129.5" r="5.5" fill="#FFCEB9"/>',
                '<circle cx="128.5" cy="129.5" r="5.5" fill="#FFCEB9"/>',
                '<path d="M88 132C92.7273 140 109.535 140 114 132" stroke="#393939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'
            )
        );

        return render;
    }
}
