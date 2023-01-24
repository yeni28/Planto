package com.ssafy.plant.service;

import com.ssafy.plant.repository.BoardRepository;
import com.ssafy.plant.dto.Board;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {

    @Autowired
    BoardRepository repository;

    @Cacheable(value = "getBoards")
    public List<Board> getBoards(String size) {
        return repository.createBySize(size);
    }

    public static int getDbCount() {
        return BoardRepository.getDbCount();
    }
}
